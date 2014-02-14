module.exports = function(bh) {
    bh.match('attach__file', function(ctx) {
        ctx.tag('span');
    });
};
