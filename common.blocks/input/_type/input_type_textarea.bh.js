module.exports = function(bh) {

    bh.match('input_type_textarea', function(ctx) {
        ctx.tag('div', true);
    });

    bh.match('input_type_textarea__box', function(ctx) {
        ctx.tag('div', true);
    });

    bh.match('input_type_textarea__control', function(ctx) {
        var input = ctx.tParam('_input');
        ctx.tag('textarea', true)
            .attr('value', null, true)
            .attrs({
                rows : input.rows || 10,
                cols : input.cols || 10
            })
            .content(input.val);
    });
};
