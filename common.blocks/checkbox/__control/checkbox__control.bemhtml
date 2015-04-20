block('checkbox').elem('control')(
    tag()('input'),

    attrs()(function() {
        // NOTE: don't remove autocomplete attribute, otherwise js and DOM may be desynced
        var attrs = { type : 'checkbox', autocomplete : 'off' },
            ctx = this.ctx;

        attrs.name = ctx.name;
        attrs.value = ctx.val;
        ctx.checked && (attrs.checked = 'checked');
        ctx.disabled && (attrs.disabled = 'disabled');

        return attrs;
    })
);
