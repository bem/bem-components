module.exports = function(bh) {
    bh.match('menu__group_has-title', function(ctx, json) {
        ctx
            .attr('aria-label', json.title, true)
            .content([
                { elem : 'group-title', content : json.title },
                ctx.content()
            ], true);
    });
};
