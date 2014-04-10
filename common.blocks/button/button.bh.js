module.exports = function(bh) {

    bh.match('button', function(ctx, json) {
        ctx.js(true);

        // Common attributes
        ctx.attr('role', 'button');

        json.tabIndex && ctx.attr('tabindex', json.tabIndex);

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
