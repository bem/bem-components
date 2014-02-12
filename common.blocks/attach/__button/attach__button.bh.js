module.exports = function(bh) {

    bh.match('button', function(ctx) {
        if(ctx.tParam('_attach')) {
            ctx
                .applyBase()
                .tag('span', true)
                .content([
                    { block : 'attach', elem : 'control' },
                    ctx.content()
                ], true);
        }
    });

};
