module.exports = function(bh) {

    bh.match('progressbar', function(ctx, json) {
        var val = json.val;

        ctx
            .js({ val : val })
            .content({
                elem : 'bar',
                attrs : { style : 'width:' + val + '%' }
            });
    });
};
