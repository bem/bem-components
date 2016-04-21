block('button').mod('togglable', 'check').attrs()(function() {
    return this.extend(applyNext(), { 'aria-pressed' : String(!!this.mods.checked) });
});
