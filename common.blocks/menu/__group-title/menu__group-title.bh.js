module.exports = function(bh) {
    bh.match('menu__group-title', function(ctx) {
        ctx.attr('aria-hidden', true);
    });
};
