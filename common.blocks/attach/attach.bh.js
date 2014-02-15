module.exports = function(bh) {

    bh.match('attach', function(ctx, json) {
        ctx
            .tParam('_attach', json)

            .tag('span')

            .js(true);

        if(typeof ctx.content() === 'undefined') {
            var button = json.button;
            typeof button === 'object' || (button = {
                block : 'button',
                tag : 'span',
                text : button
            });

            var attachMods = ctx.mod,
                buttonMods = button.mods || (button.mods = {});
            buttonMods['size'] || (buttonMods['size'] = attachMods['size']);
            buttonMods['theme'] || (buttonMods['theme'] = attachMods['theme']);
            buttonMods['disabled'] || (buttonMods['disabled'] = attachMods['disabled']);

            ctx.content([
                button,
                {
                    elem : 'no-file',
                    content : json.noFileText
                }
            ]);
        }
    });

};
