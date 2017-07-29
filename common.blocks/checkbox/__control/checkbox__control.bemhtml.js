block('checkbox').elem('control')(
    tag()('input'),

    addAttrs()(function() {
        // NOTE: don't remove autocomplete attribute, otherwise js and DOM may be desynced
        var ctx = this.ctx,
            attrs = {
                type : 'checkbox',
                autocomplete : 'off',
                name : ctx.name,
                value : ctx.val
            };

        ctx.checked && (attrs.checked = 'checked');
        ctx.disabled && (attrs.disabled = 'disabled');

        return attrs;
    })
);
