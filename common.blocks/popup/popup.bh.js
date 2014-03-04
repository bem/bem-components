module.exports = function(bh) {
    bh.match('popup', function(ctx) {
        ctx.js(true);
    });
};
