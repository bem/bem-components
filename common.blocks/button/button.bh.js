module.exports = function(bh) {

    bh.match('button', function(ctx, json) {
        ctx.tParam('_button', json);

        ctx.js(true);

        ctx
            // Common attributes
            .attrs({
                role : 'button',
                tabindex : json.tabIndex,
                id : json.id
            })
            .mix({ elem : 'control' }); // NOTE: satisfy interface of `control`

        // Attributes for button variant
        if(!ctx.mod('type')) {
            ctx.attrs({
                name : json.name,
                value : json.val
            });
            json.tag || ctx.attr('type', json.type || 'button');
            ctx.mod('disabled') && ctx.attr('disabled', 'disabled');
        }

        ctx.tag(json.tag || 'button');

        var content = ctx.content();
        if(typeof content === 'undefined') {
            content = [json.icon];
            json.text && content.push({ elem : 'text', content : json.text });
            ctx.content(content);
        }
    });

};
