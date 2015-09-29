module.exports = function(bh) {

    bh.match('checkbox_type_button', function(ctx, json) {
        var mods = ctx.mods();

        ctx.content([{
            block : 'button',
            mods : {
                togglable : 'check',
                checked : mods.checked,
                disabled : mods.disabled,
                theme : mods.theme,
                size : mods.size
            },
            attrs : {
                role : 'checkbox',
                'aria-pressed' : null,
                'aria-checked' : String(!!mods.checked)
            },
            title : json.title,
            content : [
                json.icon,
                typeof json.text !== 'undefined'?
                    { elem : 'text', content : json.text } :
                    ''
            ]
        }, {
            block : 'checkbox',
            elem : 'control',
            checked : mods.checked,
            disabled : mods.disabled,
            name : json.name,
            val : json.val
        }]);
    });

};
