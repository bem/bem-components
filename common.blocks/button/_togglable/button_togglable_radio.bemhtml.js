block('button').mod('togglable', 'radio').attrs()(function() {
    return this.extend(applyNext(), { 'aria-pressed' : String(!!this.mods.checked) });
});
