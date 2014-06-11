module.exports = function(bh) {

    bh.match('input_type_textarea', function(ctx) {
        ctx.tag('div', true);
    });

    bh.match('input_type_textarea__box', function(ctx) {
        ctx.tag(false);
    });

    bh.match('input_type_textarea__control', function(ctx) {
        var input = ctx.tParam('_input');
        ctx
            .tag('textarea', true)
            .attr('value', null, true)
            .content(input.val);
    });
};
