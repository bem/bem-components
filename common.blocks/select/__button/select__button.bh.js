module.exports = function(bh) {

    bh.match('select__button', function(ctx, json) {
        var mods = json.mods,
            select = ctx.tParam('select'),
            checkedOptions = ctx.tParam('checkedOptions');

        return {
            block : 'button',
            mix : { block : json.block, elem : json.elem },
            mods : {
                size : mods.size,
                theme : mods.theme,
                view : mods.view,
                focused : mods.focused,
                disabled : mods.disabled,
                checked : mods.mode !== 'radio' && !!checkedOptions.length
            },
            id : select.id,
            tabIndex : select.tabIndex,
            content : [
                ctx.content(),
                { block : 'icon', mix : { block : 'select', elem : 'tick' } }
            ]
        };
    });

};
