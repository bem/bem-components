module.exports = function(bh) {

    bh.match('button', function(ctx, json) {
        ctx.tParam('_button', json);

        ctx.js(true);

        ctx
            .attr('role', 'button') // Common attributes)
            .mix({ elem : 'control' }); // Implements `base-control`'s interface

        json.tabIndex && ctx.attr('tabindex', json.tabIndex);
        json.id && ctx.attr('id', json.id);

        // Attributes for button variant
        if(!ctx.mod('type')) {
            json.tag || ctx.attr('type', json.type || 'button');
            json.name && ctx.attr('name', json.name);
            json.val && ctx.attr('value', json.val);
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
