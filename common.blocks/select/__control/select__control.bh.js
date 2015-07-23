module.exports = function(bh) {

    bh.match('select__control', function(ctx, json) {
        ctx
            .tag('input')
            .attrs({
                type : 'hidden',
                name : ctx.tParam('select').name,
                value : json.val,
                disabled : json.mods.disabled? 'disabled' : undefined
            });
    });

};
