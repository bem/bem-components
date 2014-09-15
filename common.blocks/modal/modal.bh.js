module.exports = function(bh) {

    bh.match('modal', function(ctx, json) {
        ctx
            .js(true)
            .mix({
                block : 'popup',
                js : { zIndexGroupLevel : json.zIndexGroupLevel || 20 },
                mods : { autoclosable : ctx.mods().autoclosable }
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
