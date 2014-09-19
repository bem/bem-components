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

        'visible' : function(modName, modVal) {
            this._popup.setMod(modName, modVal);
        }
    }
}, /** @lends modal */{
    live : true
}));

});
