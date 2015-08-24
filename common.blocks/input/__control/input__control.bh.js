module.exports = function(bh) {

    bh.match('input__control', function(ctx) {
        ctx.tag('input');

        var input = ctx.tParam('_input'),
            attrs = ctx.extend(
                {},
                ctx.attrs(),
                {
                    id : input.id,
                    name : input.name,
                    value : input.val,
                    maxlength : input.maxLength,
                    tabindex : input.tabIndex,
                    placeholder : input.placeholder,
                    type : input.type,
                    required : input.required
                });

        input.autocomplete === false && (attrs.autocomplete = 'off');

        if(input.mods && input.mods.disabled) {
            attrs.disabled = 'disabled';
        }

        ctx.attrs(attrs);
    });

};
