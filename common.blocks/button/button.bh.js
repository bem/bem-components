module.exports = function(bh) {

    bh.match('button', function(ctx, json) {
        var modType = ctx.mod('type'),
            isRealButton = !modType || modType === 'submit';

        ctx
            .tParam('_button', json)
            .tag(json.tag || 'button')
            .js(true)
            .attrs({
                role : 'button',
                tabindex : json.tabIndex,
                id : json.id,
                type : isRealButton? modType || 'button' : undefined,
                name : json.name,
                value : json.val,
                title : json.title,
                'aria-label' : json.ariaLabel,
                'aria-labelledby' : json.ariaLabelledby
            })
            .mix({ elem : 'control' }); // NOTE: satisfy interface of `control`

        ctx.mod('togglable') && ctx.attr('aria-pressed', !!ctx.mod('checked'));

        isRealButton &&
            ctx.mod('disabled') &&
            ctx.attr('disabled', 'disabled');

        var content = ctx.content();
        if(typeof content === 'undefined') {
            content = [json.icon];
            'text' in json && content.push({ elem : 'text', content : json.text });
            ctx.content(content);
        }
    });

};
