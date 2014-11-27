module.exports = function(bh) {

    bh.match('attach', function(ctx, json) {
        ctx
            .tParam('_attach', json)
            .tag('span')
            .js(true);

        var button = json.button;
        typeof button === 'object' || (button = {
            block : 'button',
            tag : 'span',
            text : button
        });

        var attachMods = ctx.mods(),
            buttonMods = button.mods || (button.mods = {});
        ['size', 'theme', 'disabled', 'focused'].forEach(function(mod) {
            buttonMods[mod] || (buttonMods[mod] = attachMods[mod]);
        });

        ctx.content([
            button,
            {
                elem : 'no-file',
                content : json.noFileText
            }
        ], true);
    });

};
