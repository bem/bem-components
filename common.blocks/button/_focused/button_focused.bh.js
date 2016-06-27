module.exports = function(bh) {

    bh.match('button_focused', function(ctx, json) {
        ctx.js(ctx.extend(json.js, { lazyInit : false }), true);
    });

};
