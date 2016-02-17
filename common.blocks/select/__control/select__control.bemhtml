block('select').elem('control')(
    tag()('input'),
    attrs()(function() {
        return {
            type : 'hidden',
            name : this._select.name,
            value : this.ctx.val,
            disabled : this.mods.disabled? 'disabled' : undefined,
            autocomplete : 'off'
        };
    })
);
