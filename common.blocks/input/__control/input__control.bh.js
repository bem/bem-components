module.exports = function(bh) {

    bh.match('input__control', function(ctx) {
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
        ctx.mod('disabled') && (attrs.disabled = 'disabled');

        ctx.attrs(attrs);

        if(!ctx.tParam('_input__control'))
            return {
                elem : 'box',
                content : ctx.json()
            };
    });

};
