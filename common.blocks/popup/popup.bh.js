module.exports = function(bh) {
    bh.match('popup', function(ctx, json) {
        ctx
            .js({
                mainOffset : json.mainOffset,
                secondaryOffset : json.secondaryOffset,
                viewportOffset : json.viewportOffset,
                directions : json.directions,
                zIndexGroupLevel : json.zIndexGroupLevel
            })
            .attrs({
                role : 'dialog',
                'aria-hidden' : !ctx.mod('visible') || undefined
            });
    });
};
