module.exports = function(bh) {
    bh.match('icon', function(ctx) {
        ctx.tag('i');
    });
};
