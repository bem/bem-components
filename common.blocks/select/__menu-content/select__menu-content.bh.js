module.exports = function(bh) {

    bh.match('select__menu-content', function(ctx) {
        var mods = ctx.mods(),
            options = ctx.param('options'),
            optionToMenuItem = function(option) {
                var res = {
                        block : 'menu-item',
                        mods : { checked : option.checked, disabled : mods.disabled || option.disabled },
                        val : option.val,
                        js : { checkedText : option.checkedText },
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

        return  options.map(function(optionOrGroup) {
            return optionOrGroup.group?
                {
                    block : 'menu',
                    elem : 'group',
                    mods : { 'has-title' : !!optionOrGroup.title },
                    title : optionOrGroup.title,
                    content : optionOrGroup.group.map(optionToMenuItem)
                } :
                optionToMenuItem(optionOrGroup);
        });
    });

};
