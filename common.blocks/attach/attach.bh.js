module.exports = function(bh) {

    bh.match('attach', function(ctx, json) {
        ctx
            .tParam('_attach', json)

            .tag('span')

            .js(true);

        if(typeof ctx.content() === 'undefined') {
            var buttonText = json.buttonText,
                button = json.button;

            button || (button = {
                block : 'button',
                tag : 'span',
                text : buttonText
            });

            button.mods || (button.mods = {});
            var modNames = ['size', 'theme', 'disabled'], i = 0, modName;
            while(modName = modNames[i++])
                button.mods[modName] || (button.mods[modName] = ctx.mod(modName));

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
