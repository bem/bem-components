module.exports = function(bh) {

    bh.match('input__control', function(ctx, json) {
        ctx.tag('input');

        var input = ctx.tParam('_input'),
            attrs = {
                id : input.id,
                name : input.name,
                value : input.val,
                maxlength : input.maxLength,
                tabindex : input.tabIndex,
                placeholder : input.placeholder
            };

        input.autocomplete === false && (attrs.autocomplete = 'off');
        json.blockMods.disabled && (attrs.disabled = 'disabled');

        ctx.attrs(attrs);
    });

};
