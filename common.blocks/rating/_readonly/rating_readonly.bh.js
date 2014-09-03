module.exports = function(bh) {

    bh.match('rating_readonly', function(ctx, json) {
        var _sizes = {
            s : 12,
            m : 16
        };

        ctx
            .tag('span')
            .attrs({
                style : 'width: ' + json.granulation * _sizes[ctx.mod('size')] + 'px;'
            })
            .content({
                elem : 'result',
                attrs : { style : 'width: ' + (json.points || 0) * _sizes[ctx.mod('size')] + 'px;' }
            });
    });

};
