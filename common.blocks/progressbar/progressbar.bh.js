module.exports = function(bh) {

    bh.match('progressbar', function(ctx, json) {
        var mods = json.mods || {};

        ctx
            .js({ progress : json.progress || 0 })
            .content([
                {
                    elem : 'box',
                    content : { elem : 'bar' }
                },
                mods.text && { elem : 'text' }
            ]);
    });
};
