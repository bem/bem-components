module.exports = function(bh) {
    bh.match('input__box', function(ctx) {
        ctx.tag('span');
    });
};
