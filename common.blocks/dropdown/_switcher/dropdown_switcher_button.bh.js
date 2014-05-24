module.exports = function(bh) {

    bh.match('dropdown_switcher_button__switcher', function(ctx, json) {
        var content = ctx.content();
        if(Array.isArray(content)) return content;

        var res = ctx.isSimple(content)?
            { block : 'button', text : content } :
            content;

        if(res.block === 'button') {
            var resMods = res.mods || (res.mods = {}),
                dropdownMods = json.blockMods;
            resMods.size || (resMods.size = dropdownMods.size);
            resMods.theme || (resMods.theme = dropdownMods.theme);
            resMods.disabled = dropdownMods.disabled;
        }

        return res;
    });

};
