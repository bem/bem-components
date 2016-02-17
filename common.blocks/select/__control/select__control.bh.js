module.exports = function(bh) {

    bh.match('select__control', function(ctx, json) {
        var mods = json.blockMods || json.mods;
        ctx
            .tag('input')
            .attrs({
                type : 'hidden',
                name : ctx.tParam('select').name,
                value : json.val,
                disabled : mods.disabled? 'disabled' : undefined,
                autocomplete : 'off'
            });
    });

};
