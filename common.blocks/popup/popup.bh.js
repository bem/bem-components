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
            .attrs({ 'aria-hidden' : 'true' });
    });
};
