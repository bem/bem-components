module.exports = function(bh) {
    bh.match('radio__text', function(ctx) {
        ctx
            .tag('span')
            .attr('aria-hidden', 'true');
    });
};
