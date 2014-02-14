module.exports = function(bh) {

    bh.match('checkbox_type_button', function(ctx, json) {
        var mods = ctx.mods(),
            buttonMods = {
                togglable : 'check',
                checked : mods.checked,
                disabled : mods.disabled,
                theme : mods.theme,
                size : mods.size
            },
            buttonContent = [
                {
                    block : 'checkbox',
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
            mix : { block : 'checkbox', mods : mods, js : json.js || true },
            tag : 'label',
            mods : buttonMods,
            content : buttonContent
        };
    });

};
