block('button').mod('togglable', 'check').addAttrs()(function() {
    return this.extend({ 'aria-pressed' : String(!!this.mods.checked) },
        applyNext());
});
