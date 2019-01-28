module.exports = function(bh) {

    bh.match('select', function(ctx, json) {
        ctx.tParam('_selectCls', json.cls);
    });

    bh.match('popup', function(ctx) {
        var cls = ctx.tParam('_selectCls');

        cls && ctx.cls(cls + '-popup');
    });

};
