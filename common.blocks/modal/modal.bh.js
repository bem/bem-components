module.exports = function(bh) {

    bh.match('modal', function(ctx, json) {
        ctx
            .js(true)
            .mix({
                block : 'popup',
                js : { zIndexGroupLevel : json.zIndexGroupLevel || 20 },
                mods : { autoclosable : ctx.mod('autoclosable') }
            })
            .attrs({
                role : 'dialog',
                'aria-hidden' : !ctx.mod('visible')
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
