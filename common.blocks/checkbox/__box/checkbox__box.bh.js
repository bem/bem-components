module.exports = function(bh) {
    bh.match('checkbox__box', function(ctx) {
        ctx.tag('span');
    });
};
