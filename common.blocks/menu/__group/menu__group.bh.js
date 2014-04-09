module.exports = function(bh) {

    bh.match('menu__group', function(ctx, json) {
        ctx.attr('role', 'group');

        var title = json.title;
        if(typeof title !== 'undefined') {
            ctx
                .attr('aria-label', title, true)
                .content([
                    { elem : 'group-title', content : title },
                    ctx.content()
                ], true);
        }
    });

};
