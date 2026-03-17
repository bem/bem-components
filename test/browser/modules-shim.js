/**
 * Minimal synchronous ym-compatible modules shim for browser tests.
 *
 * Supports:
 *   modules.define(name, deps, factory)   — normal definition
 *   modules.define(name, factory)          — redefinition (factory receives prev value as 2nd arg)
 *   modules.require(deps, factory)         — resolve deps synchronously, call factory
 *
 * Eagerly resolves first definitions when all deps are available (ym behavior).
 * Supports incremental resolution: previously resolved entries are skipped on re-resolve.
 */
export function createModulesShim(preRegistered) {
    // name → [{deps, factory, isRedef, resolved}]
    const registry = new Map();
    // name → resolved value (cache)
    const resolved = new Map();

    for (const [name, value] of Object.entries(preRegistered)) {
        resolved.set(name, value);
    }

    function resolve(name) {
        const entries = registry.get(name);
        const hasUnresolved = entries && entries.some(e => !e.resolved);

        if (resolved.has(name) && !hasUnresolved) return resolved.get(name);

        if (!entries || !entries.length) {
            if (resolved.has(name)) return resolved.get(name);
            throw new Error(
                `Module "${name}" is not defined.\nKnown: ${[
                    ...resolved.keys(),
                    ...registry.keys(),
                ].join(', ')}`
            );
        }

        let value = resolved.get(name);
        let runCount = 0;
        for (const entry of entries) {
            if (entry.resolved) continue;
            try {
                const depVals = entry.deps.map(d => resolve(d));
                const thisCtx = { name };
                if (entry.isRedef) {
                    entry.factory.call(thisCtx, v => { value = v; }, value, ...depVals);
                } else {
                    entry.factory.call(thisCtx, v => { value = v; }, ...depVals);
                }
                entry.resolved = true;
                runCount++;
            } catch (err) {
                // Log but continue — one failing spec factory must not block others
                console.error(`[modules] factory #${runCount} for "${name}" threw:`, err);
            }
        }

        resolved.set(name, value);
        return value;
    }

    const shim = {
        define(name, depsOrFactory, factoryArg) {
            const isRedef = typeof depsOrFactory === 'function';
            const deps = isRedef ? [] : depsOrFactory;
            const factory = isRedef ? depsOrFactory : factoryArg;

            const isFirst = !registry.has(name);
            if (isFirst) registry.set(name, []);
            registry.get(name).push({ deps, factory, isRedef, resolved: false });

            // Eagerly resolve first non-redef definitions when all deps are available
            if (isFirst && !isRedef && deps.every(d => resolved.has(d))) {
                try { resolve(name); } catch (e) { /* ignore — will be resolved on require */ }
            }
        },

        require(deps, factory) {
            const depVals = deps.map(d => resolve(d));
            factory(...depVals);
        },
    };

    return shim;
}
