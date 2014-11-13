module.exports = function(bh) {

    bh.match('textarea__control', function(ctx) {
        var textarea = ctx.tParam('_textarea'),
            attrs = {
                id : textarea.id,
                name : textarea.name,
                tabindex : textarea.tabIndex,
                placeholder : textarea.placeholder
            };

        textarea.autocomplete === false && (attrs.autocomplete = 'off');

        if(textarea.mods && textarea.mods.disabled) {
            attrs.disabled = 'disabled';
        }

        ctx
            .tag('textarea')
            .attrs(attrs)
            .content(textarea.val, true);
    });

};
