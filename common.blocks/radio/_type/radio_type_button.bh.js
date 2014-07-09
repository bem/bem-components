module.exports = function(bh) {

    bh.match('radio_type_button', function(ctx, json) {
        var mods = ctx.mods(),
            buttonMods = {
                togglable : mods.mode === 'radio-check'?
                    'check' :
                    'radio',
                checked : mods.checked,
                disabled : mods.disabled,
                theme : mods.theme,
                size : mods.size
            },
            buttonContent = [
                {
                    block : 'radio',
                    elem : 'control',
                    checked : mods.checked,
                    disabled : mods.disabled,
                    name : json.name,
                    val : json.val
                },
                json.icon
            ];

        typeof json.text !== 'undefined' &&
            buttonContent.push({ elem : 'text', content : json.text });

        return {
            block : 'button',
            mix : { block : 'radio', mods : mods, js : true },
            mods : buttonMods,
            content : buttonContent
        };
    });

};
