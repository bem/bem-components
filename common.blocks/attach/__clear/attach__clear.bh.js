module.exports = function(bh) {
    bh.match('attach__clear', function(ctx) {
        ctx.tag('span');
    });
};
