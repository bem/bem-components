module.exports = function(bh) {

    bh.match('button', function(ctx, json) {
        ctx.tag(json.tag || 'button'); // NOTE: need to predefine tag

        var modType = ctx.mod('type'),
            isRealButton = (ctx.tag() === 'button') && (!modType || modType === 'submit');

        ctx
            .tParam('_button', json)
            .js(true)
            .attrs({
                role : 'button',
                tabindex : json.tabIndex,
                id : json.id,
                type : isRealButton? modType || 'button' : undefined,
                name : json.name,
                value : json.val,
                title : json.title
            })
            .mix({ elem : 'control' }); // NOTE: satisfy interface of `control`

        if(ctx.mod('disabled')) {
            isRealButton? ctx.attr('disabled', 'disabled') : ctx.attr('aria-disabled', 'true');
        }

        var content = ctx.content();
        if(typeof content === 'undefined') {
            content = [json.icon];
            'text' in json && content.push({ elem : 'text', content : json.text });
            ctx.content(content);
        }
    });

};
