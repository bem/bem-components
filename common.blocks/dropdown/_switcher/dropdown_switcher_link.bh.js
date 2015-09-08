module.exports = function(bh) {

    bh.match('dropdown_switcher_link__switcher', function(ctx, json) {
        var dropdown = ctx.tParam('dropdown'),
            switcher = dropdown.switcher;

        if(Array.isArray(switcher)) return switcher;

        var res = ctx.isSimple(switcher)?
            { block : 'link', mods : { pseudo : true }, content : switcher } :
            switcher;

        if(res.block === 'link') {
            var resMods = res.mods || (res.mods = {}),
                resAttrs = res.attrs || (res.attrs = {}),
                dropdownMods = json.blockMods || json.mods;
            resMods.theme || (resMods.theme = dropdownMods.theme);
            resMods.disabled = dropdownMods.disabled;

            resAttrs['aria-haspopup'] = 'true';
            resAttrs['aria-controls'] = ctx.tParam('popupId');
            resAttrs['aria-expanded'] = 'false';

            res.mix = ctx.tParam('mix');
        }

        return res;
    });

};
