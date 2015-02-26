module.exports = function(bh) {
    bh.match('popup', function(ctx, json) {
        var visible = !!ctx.mod('visible');
        ctx
            .js({
                mainOffset : json.mainOffset,
                secondaryOffset : json.secondaryOffset,
                viewportOffset : json.viewportOffset,
                directions : json.directions,
                zIndexGroupLevel : json.zIndexGroupLevel
            })
            .attrs({
                id : json.id,
                'aria-expanded' : visible,
                'aria-hidden' : !visible
            });
    });
};
