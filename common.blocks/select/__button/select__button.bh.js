module.exports = function(bh) {

    bh.match('select__button', function(ctx, json) {
        var mods = json.blockMods || json.mods,
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
            attrs : {
                role : 'listbox',
                'aria-multiselectable' : String(mods.mode === 'check'),
                'aria-disabled' : mods.disabled && 'true',
                'aria-haspopup' : 'true',
                'aria-expanded' : String(!!mods.opened),
                'aria-controls' : ctx.tParam('popupId'),
                'aria-label' : ctx.tParam('checkedText')
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
