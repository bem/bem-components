/**
 * @module modal
 */

modules.define(
    'modal',
    ['i-bem__dom', 'popup'],
    function(provide, BEMDOM) {

/**
 * @exports
 * @class modal
 * @bem
 *
 * @bemmod visible Represents visible state
 */
provide(BEMDOM.decl(this.name, /** @lends modal.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._popup = this.findBlockOn('popup');
            }
        },

        'visible' : {
            'true' : function() {
                // Apply the animation only at first opening, otherwise the animation will be played when page loaded.
                this.setMod('animation');

                this._popup
                    .setMod('visible')
                    .on({ modName : 'visible', modVal : '' }, this._onPopupHide, this);
            },

            '' : function() {
                this._popup
                    .delMod('visible')
                    .un({ modName : 'visible', modVal : '' }, this._onPopupHide, this);
            }
        }
    },

    _onPopupHide : function() {
        this.delMod('visible');
    }
}, /** @lends modal */{
    live : true
}));

});
