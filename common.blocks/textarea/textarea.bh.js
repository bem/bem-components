module.exports = function(bh) {
    bh.match('textarea', function(ctx, json) {
        var attrs = {
                id : json.id,
                name : json.name,
                tabindex : json.tabIndex,
                placeholder : json.placeholder
            };

        json.autocomplete === false && (attrs.autocomplete = 'off');
        ctx.mod('disabled') && (attrs.disabled = 'disabled');

        ctx
            .js(true)
            .tag('textarea')
            .mix({ elem : 'control' }) // NOTE: satisfy interface of `control`
            .attrs(attrs)
            .content(json.val, true);
    });
};
