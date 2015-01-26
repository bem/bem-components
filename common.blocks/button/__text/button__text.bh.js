module.exports = function(bh) {
    bh.match('button__text', function(ctx) {
        ctx.tag('span');
    });
};
