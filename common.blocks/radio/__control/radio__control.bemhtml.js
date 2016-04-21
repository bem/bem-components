block('radio').elem('control')(
    tag()('input'),

    attrs()(function() {
        // NOTE: don't remove autocomplete attribute, otherwise js and DOM may be desynced
        var ctx = this.ctx,
            attrs = {
                type : 'radio',
                autocomplete : 'off',
                name : ctx.name,
                value : ctx.val
            };

        ctx.checked && (attrs.checked = 'checked');
        ctx.disabled && (attrs.disabled = 'disabled');

        return attrs;
    })
);
