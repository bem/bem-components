module.exports = function(bh) {

    bh.match('select__menu', function(ctx, json) {
        var mods = ctx.mods(),
            select = ctx.tParam('select');

        return {
            block : 'menu',
            mix : { block : json.block, elem : json.elem },
            mods : {
                size : mods.size,
                theme : mods.theme,
                disabled : mods.disabled,
                mode : mods.mode
            },
            val : select.val,
            attrs : { tabindex : null },
            content : {
                elem : 'menu-content',
                block : 'select',
                mods : {
                    disabled : mods.disabled,
                    theme : mods.theme
                },
                options : select.options
            }
        };
    });
};
