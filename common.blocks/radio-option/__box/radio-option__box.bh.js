module.exports = function(bh) {
    bh.match('radio-option__box', function(ctx) {
        ctx.tag('span');
    });
};
