module.exports = function(bh) {

    bh.match('input_polling', function(ctx) {
        ctx
            .applyBase()
            .extend(ctx.js(), { live : false });
    });

};
