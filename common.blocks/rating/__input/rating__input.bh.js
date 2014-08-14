module.exports = function(bh) {

    bh.match('rating__input', function(ctx) {
        ctx
            .tag('input')
            .attr('type', 'radio');
    });

};
