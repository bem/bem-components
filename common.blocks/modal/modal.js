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
            },

            '' : function() {
                this.delMod('visible');
            }
        },

        'visible' : function(modName, modVal) {
            this._popup.setMod(modName, modVal);
        }
    },

    /**
     * Sets content
     * @param {String|jQuery} content
     * @returns {modal} this
     */
    setContent : function(content) {
        BEMDOM.update(this.elem('content'), content);
        return this;
    }
}, /** @lends modal */{
    live : true
}));

});
