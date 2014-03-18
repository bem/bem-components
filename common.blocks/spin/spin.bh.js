module.exports = function(bh) {
    bh.match('spin', function(ctx) {
        ctx.tag('span');
    });
};
