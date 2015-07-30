module.exports = function(bh) {
    bh.match('checkbox__text', function(ctx) {
        ctx
            .tag('span')
            .attr('aria-hidden', true);
    });
};
