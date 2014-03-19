module.exports = function(bh) {
    bh.match('menu', function(ctx) {
        ctx
            .attr('tabindex', 0)
            .js(true)
            .tag('ul');
    });
};
