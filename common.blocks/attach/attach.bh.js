module.exports = function(bh) {

    bh.match('attach', function(ctx, json) {
        ctx
            .tParam('attach', json)
            .tParam('textId', ctx.generateId())
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
                attrs : { 'aria-hidden' : true },
                content : json.noFileText
            }
        ], true);
    });

};
