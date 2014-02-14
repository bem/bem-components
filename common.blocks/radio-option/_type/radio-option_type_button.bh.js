module.exports = function(bh) {

    bh.match('radio-option_type_button', function(ctx, json) {
        var mods = ctx.mods(),
            buttonMods = {
                togglable : 'radio',
                checked : mods.checked,
                disabled : mods.disabled
            },
            buttonContent = [
                {
                    block : 'radio-option',
                    elem : 'control',
                    checked : mods.checked,
                    disabled : mods.disabled,
                    name : json.name,
                    val : json.val
                },
                json.icon
            ];

        var radio = ctx.tParam('_radio');
        if(radio) {
            var radioMods = radio.mods;
            if(radioMods) {
                buttonMods.theme = radioMods.theme;
                buttonMods.size = radioMods.size;
            }
        }

        typeof json.text !== 'undefined' &&
            buttonContent.push({ elem : 'text', content : json.text });

        return {
            block : 'button',
            mix : { block : 'radio-option', mods : mods, js : true },
            tag : 'label',
            mods : buttonMods,
            content : buttonContent
        };
    });

};
