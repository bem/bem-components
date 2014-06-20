module.exports = function(bh) {

    bh.match('select_focused', function(ctx) {
        ctx
            .applyBase()
            .extend(ctx.js(), { live : false });
    });

};
