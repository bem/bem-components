module.exports = function(bh) {
    bh.match('menu__group', function(ctx) {
        ctx.attr('role', 'group');
    });
};
