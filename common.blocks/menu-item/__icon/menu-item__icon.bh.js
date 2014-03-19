module.exports = function(bh) {
    bh.match('menu-item__icon', function(ctx) {
        ctx.tag('i');
    });
};
