block('button').mod('togglable', 'radio').addAttrs()(function() {
    return { 'aria-pressed' : String(!!this.mods.checked) };
});
