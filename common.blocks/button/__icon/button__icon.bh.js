module.exports = function(bh) {
    bh.match('button__icon', function(ctx) {
        ctx.tag('span');
    });
};
