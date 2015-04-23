module.exports = function(bh) {

    bh.match('button_type_link', function(ctx, json) {
        ctx
            .tag('a')
            .attr('role', 'link');

        json.target && ctx.attr('target', json.target);
        ctx.mod('disabled')?
            ctx
                .attr('aria-disabled', 'true')
                .js({ url : json.url }) :
            ctx.attr('href', json.url);
    });

};
