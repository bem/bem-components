module.exports = function(bh) {

    bh.match('menu__group', function(ctx, json) {
        var title = json.title;

        ctx.attr('role', 'group');

        if(typeof title !== 'undefined') {
            var titleId = ctx.generateId();
            ctx
                .attr('aria-labelledby', titleId)
                .content([
                    {
                        elem : 'group-title',
                        attrs : {
                            role : 'presentation',
                            id : titleId
                        },
                        content : title
                    },
                    ctx.content()
                ], true);
        }
    });

};
