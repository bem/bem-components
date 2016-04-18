block('dropdown').mod('switcher', 'button').elem('switcher').replace()(function() {
    var dropdown = this._dropdown,
        switcher = dropdown.switcher;

    if(Array.isArray(switcher)) return switcher;

    var res = this.isSimple(switcher)?
        { block : 'button', text : switcher } :
        switcher;

    if(res.block === 'button') {
        var resMods = res.mods || (res.mods = {}),
            resAttrs = res.attrs || (res.attrs = {}),
            dropdownMods = this.mods;
        resMods.size || (resMods.size = dropdownMods.size);
        resMods.theme || (resMods.theme = dropdownMods.theme);
        resMods.disabled = dropdownMods.disabled;

        resAttrs['aria-haspopup'] = 'true';
        resAttrs['aria-controls'] = this._popupId;
        resAttrs['aria-expanded'] = 'false';

        res.mix = apply('mix');
    }

    return res;
});
