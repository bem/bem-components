module.exports = function(bh) {

    bh.match('radio_type_button', function(ctx, json) {
        var mods = ctx.mods();

        ctx.content([{
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
            title : json.title,
            content : [
                json.icon,
                typeof json.text !== 'undefined'?
                    { elem : 'text', content : json.text } :
                    ''
            ]
        }, {
            block : 'radio',
            elem : 'control',
            checked : mods.checked,
            disabled : mods.disabled,
            name : json.name,
            val : json.val
        }]);
    });

};
