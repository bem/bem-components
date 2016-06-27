/**
 * @module link
 */

modules.define('link', ['keyboard__codes'], function(provide, keyCodes, Link) {

/**
 * @exports
 * @class link
 * @bem
 */
provide(Link.declMod({ modName : 'pseudo', modVal : true }, /** @lends link.prototype */{
    onSetMod : {
        'focused' : {
            'true' : function() {
                this.__base.apply(this, arguments);

                this._domEvents('control').on('keydown', this._onKeyDown);
            },
            '' : function() {
                this.__base.apply(this, arguments);

                this._domEvents('control').un('keydown', this._onKeyDown);
            }
        }
    },

    _onPointerClick : function(e) {
        e.preventDefault();

        this.__base.apply(this, arguments);
    },

    _onKeyDown : function(e) {
        e.keyCode === keyCodes.ENTER && this._onPointerClick(e);
    }
}));

});
