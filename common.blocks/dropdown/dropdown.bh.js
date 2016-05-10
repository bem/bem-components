module.exports = function(bh) {

    bh.match({
        'dropdown' : function(ctx) {
            var dropdown = ctx.json();

            ctx
                .js(ctx.extend({ id : ctx.generateId() }, ctx.js()))
                .tParam('dropdown', dropdown)
                .tParam('popupId', ctx.generateId())
                .tParam('theme', ctx.mod('theme'))
                .tParam('mix', [dropdown].concat(
                    dropdown.switcher.mix || [],
                    dropdown.mix || []));

            return [{ elem : 'popup' }, { elem : 'switcher' }];
        },

        'dropdown__popup' : function(ctx) {
            var dropdown = ctx.tParam('dropdown'),
                popup = dropdown.popup;

            if(ctx.isSimple(popup) || popup.block !== 'popup') {
                popup = { block : 'popup', content : popup };
            }

            var popupMods = popup.mods || (popup.mods = {}),
                popupAttrs = popup.attrs || (popup.attrs = {});
            popupMods.theme || (popupMods.theme = ctx.tParam('theme'));
            popupMods.hasOwnProperty('autoclosable') || (popupMods.autoclosable = true);

            popupMods.target = 'anchor';
            popupAttrs.id = ctx.tParam('popupId');

            popup.mix = [dropdown].concat(popup.mix || []);

            return popup;
        },

        'dropdown__switcher' : function(ctx) {
            var dropdown = ctx.tParam('dropdown'),
                switcher = dropdown.switcher;

            switcher.block && (switcher.mix = ctx.tParam('mix'));

            return switcher;
        }
    });

};
