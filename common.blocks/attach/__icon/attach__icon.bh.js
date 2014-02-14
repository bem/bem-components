module.exports = function(bh) {
    bh.match('attach__icon', function(ctx) {
        ctx.tag('i');
    });
};
