module.exports = function(bh) {

    bh.match('radio_type_button', function(ctx, json) {
        var mods = ctx.mods();

        json.js || (json.js = true);

        return ([{
            block : 'button',
            mods : {
                togglable : mods.mode === 'radio-check'?
                    'check' :
                    'radio',
                checked : mods.checked,
                disabled : mods.disabled,
                theme : mods.theme,
                size : mods.size
            },
            mix : json,
            tag : 'span',
            attrs : {
                role : 'radio',
                id : ctx.generateId(),
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
        }
        /*, {
            block : 'radio',
            elem : 'control',
            checked : mods.checked,
            disabled : mods.disabled,
            name : json.name,
            val : json.val
        }*/]);
    });

};
