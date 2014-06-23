module.exports = function(bh) {

    bh.match('select__control', function(ctx, json) {
        var val = json.val;
        ctx
            .tag('input')
            .attrs({
                type : 'hidden',
                name : ctx.tParam('_select').name,
                value : ctx.isSimple(val)? val : JSON.stringify(val),
                disabled : json.blockMods.disabled? 'disabled' : undefined
            });
    });

};
