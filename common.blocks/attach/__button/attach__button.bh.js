module.exports = function(bh) {

    bh.match('button', function(ctx) {
        if(ctx.tParam('attach')) {
            ctx
                .applyBase()
                .tag('span', true)
                .content([
                    { block : 'attach', elem : 'control' },
                    ctx.content()
                ], true);
        }
    });

    bh.match('button__text', function(ctx) {
        if(ctx.tParam('attach')) {
            ctx
                .applyBase()
                .attr('id', ctx.tParam('textId'));
        }
    });
};
