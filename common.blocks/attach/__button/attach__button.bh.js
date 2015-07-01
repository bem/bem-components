module.exports = function(bh) {

    bh.match('button', function(ctx) {
        if(ctx.tParam('_attach')) {
            ctx
                .tag('span', true)
                .applyBase()
                .content([
                    { block : 'attach', elem : 'control' },
                    ctx.content()
                ], true);
        }
    });

};
