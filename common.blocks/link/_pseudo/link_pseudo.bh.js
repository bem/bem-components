module.exports = function(bh) {
    bh.match('link_pseudo', function(ctx) {
        ctx.js(true);
    });
};
