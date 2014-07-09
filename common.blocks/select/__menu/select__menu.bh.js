module.exports = function(bh) {

    bh.match('select__menu', function(ctx, json) {
        var mods = ctx.mods(),
            select = ctx.tParam('_select'),
            optionToMenuItem = function(option) {
                var res = {
                        block : 'menu-item',
                        mods : { checked : option.checked, disabled : option.disabled },
                        js : { checkedText : option.checkedText, val : option.val },
                        content : option.text
                    };

                if(option.icon) {
                    res.js.text = option.text;
                    res.content = [
                        option.icon,
                        res.content
                    ];
                }

                return res;
            };

        return {
            block : 'menu',
            mix : { block : json.block, elem : json.elem },
            mods : {
                size : mods.size,
                theme : mods.theme,
                disabled : mods.disabled,
                mode : mods.mode
            },
            attrs : { tabindex : null },
            content : select.options.map(function(optionOrGroup) {
                return optionOrGroup.group?
                    {
                        elem : 'group',
                        mods : { 'has-title' : !!optionOrGroup.title },
                        title : optionOrGroup.title,
                        content : optionOrGroup.group.map(optionToMenuItem)
                    } :
                    optionToMenuItem(optionOrGroup);
            })
        };
    });

};
