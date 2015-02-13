module.exports = function(bh) {

    bh.match('modal', function(ctx, json) {
        var visible = !!ctx.mod('visible');

        ctx
            .js(true)
            .mix({
                block : 'popup',
                js : { zIndexGroupLevel : json.zIndexGroupLevel || 20 },
                mods : { autoclosable : ctx.mod('autoclosable') }
            })
            .attrs({
                role : 'dialog',
                'aria-expanded' : visible,
                'aria-hidden' : !visible,
                'aria-label' : json.ariaLabel,
                'aria-labelledby' : json.ariaLabelledby,
                'aria-describedby' : json.ariaDescribedby
            })
            .content({
                elem : 'table',
                content : {
                    elem : 'cell',
                    content : {
                        elem : 'content',
                        content : ctx.content()
                    }
                }
            }, true);
    });

};
