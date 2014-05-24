module.exports = function(bh) {

    bh.match('dropdown', function(ctx, json) {
        ctx.js(true);

        var popup = json.popup;

        if(ctx.isSimple(popup) || popup.block !== 'popup') {
            popup = { block : 'popup', content : popup };
        }

        var popupMods = popup.mods || (popup.mods = {});
        popupMods.theme || (popupMods.theme = ctx.mod('theme'));
        popupMods.hasOwnProperty('autoclosable') || (popupMods.autoclosable = true);

        ctx.content([
           { elem : 'switcher', content : json.switcher },
           popup
        ], true);
    });

};
