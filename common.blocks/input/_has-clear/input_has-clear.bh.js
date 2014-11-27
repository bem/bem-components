module.exports = function(bh) {
    bh.match('input_has-clear__box', function(ctx) {
        ctx.content([ctx.content(), { elem : 'clear' }], true);
    });
};
