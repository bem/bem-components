module.exports = function(bh) {

    bh.match('select__control', function(ctx, json) {
        ctx
            .tag('input')
            .attrs({
                type : 'hidden',
                name : ctx.tParam('_select').name,
                value : JSON.stringify(json.val),
                disabled : json.blockMods.disabled? 'disabled' : undefined
            });
    });

};
