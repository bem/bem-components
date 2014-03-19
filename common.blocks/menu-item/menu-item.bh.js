module.exports = function(bh) {
    bh.match('menu-item', function(ctx, json) {
        ctx
            .js({ val : json.val })
            .attr('role', 'menuitem');
    });
};
