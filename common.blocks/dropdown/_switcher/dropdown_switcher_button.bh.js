module.exports = function(bh) {

    bh.match('dropdown_switcher_button__switcher', function(ctx, json) {
        var content = ctx.content();
        if(Array.isArray(content)) return content;

        var res = ctx.isSimple(content)?
            {
                block : 'button',
                content : [{ elem : 'text', content : content }]
            } :
            content;

        if(res.block === 'button') {
            var resMods = res.mods || (res.mods = {}),
                dropdownMods = json.blockMods;
            resMods.size || (resMods.size = dropdownMods.size);
            resMods.theme || (resMods.theme = dropdownMods.theme);
            resMods.disabled = dropdownMods.disabled;

            ctx.tParam('_has-tick') && Array.isArray(res.content) && res.content.push({
                block : 'icon',
                mix : { block : 'dropdown', elem : 'tick' }
            });
        }

        return res;
    });

};
