module.exports = function(bh) {

    bh.match('select__button', function(ctx, json) {
        var mods = json.blockMods,
            select = ctx.tParam('_select'),
            checkedOptions = ctx.tParam('_checkedOptions');

        return {
            block : 'button',
            mix : { block : json.block, elem : json.elem },
            mods : {
                size : mods.size,
                theme : mods.theme,
                focused : mods.focused,
                disabled : mods.disabled,
                checked : mods.mode !== 'radio' && !!checkedOptions.length
            },
            id : select.id,
            textMaxWidth : select.textMaxWidth,
            content : [
                ctx.content(),
                { block : 'icon', mix : { block : 'select', elem : 'tick' } }
            ]
        };
    });

};
