module.exports = function(bh) {
    bh.match('menu-item', function(ctx, json) {
        ctx
            .js(ctx.extend({ val : json.val }, json.js), true)
            .attr('role', 'menuitem');
    });
};
