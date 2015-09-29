module.exports = function(bh) {

    bh.match('select__button', function(ctx, json) {
        var mods = json.blockMods || json.mods,
            select = ctx.tParam('select'),
            checkedOptions = ctx.tParam('checkedOptions'),
            selectTextId = ctx.generateId();

        ctx.tParam('selectTextId', selectTextId);

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
            attrs : {
                role : 'listbox',
                'aria-owns' : ctx.tParam('optionIds').join(' '),
                'aria-multiselectable' : mods.mode === 'check'? 'true' : null,
                'aria-labelledby' : selectTextId
            },
            tabIndex : select.tabIndex,
            content : [
                ctx.content(),
                { block : 'icon', mix : { block : 'select', elem : 'tick' } }
            ]
        };
    });

    bh.match('button__text', function(ctx) {
        if(ctx.tParam('select')) {
            ctx.attr('id', ctx.tParam('selectTextId'));
        }
    });

};
