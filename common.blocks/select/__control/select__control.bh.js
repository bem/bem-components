module.exports = function(bh) {

    bh.match('select__control', function(ctx, json) {
        ctx
            .tag('input')
            .attrs({
                type : 'hidden',
                name : ctx.tParam('select').name,
                value : json.val,
                disabled : json.blockMods.disabled? 'disabled' : undefined
            });
    });

};
