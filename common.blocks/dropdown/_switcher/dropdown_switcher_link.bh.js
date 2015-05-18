module.exports = function(bh) {

    bh.match('dropdown_switcher_link__switcher', function(ctx, json) {
        var content = ctx.content();
        if(Array.isArray(content)) return content;

        var res = ctx.isSimple(content)?
            { block : 'link', mods : { pseudo : true }, content : content } :
            content;

        if(res.block === 'link') {
            var resMods = res.mods || (res.mods = {}),
                dropdownMods = json.blockMods;
            resMods.theme || (resMods.theme = dropdownMods.theme);
            resMods.disabled = dropdownMods.disabled;

            res.attrs || (res.attrs = {});
            res.attrs['aria-haspopup'] = true;
            res.attrs['aria-expanded'] = !!dropdownMods.opened;
            res.attrs['aria-controls'] = ctx.tParam('popupId');
        }

        return res;
    });

};
