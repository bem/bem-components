block('modal')(
    addJs()(true),

    addMix()(function() {
        return {
            block : 'popup',
            js : { zIndexGroupLevel : this.ctx.zIndexGroupLevel || 20 },
            mods : { autoclosable : this.mods.autoclosable }
        };
    }),

    addAttrs()({
        role : 'dialog',
        'aria-hidden' : 'true'
    }),

    content()(function() {
        return {
            elem : 'table',
            content : {
                elem : 'cell',
                content : {
                    elem : 'content',
                    content : applyNext()
                }
            }
        };
    })
);
