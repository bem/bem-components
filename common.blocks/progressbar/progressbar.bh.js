module.exports = function(bh) {

    bh.match('progressbar', function(ctx, json) {
        var value = json.value;

        ctx
            .js({ value : value })
            .content({
                elem : 'bar',
                attrs : { style : 'width:' + value + '%' }
            });
    });
};
