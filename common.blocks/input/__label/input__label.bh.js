module.exports = function(bh) {
    bh.match('input__label', function(ctx, json) {
        ctx.tag('label')
            .attr('for', json.id || ctx.tParam('_input').id);
    });
};
