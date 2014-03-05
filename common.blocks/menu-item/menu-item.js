/**
 * @module menu-item
 */

modules.define('menu-item', ['i-bem__dom'], function(provide, BEMDOM) {

/**
 * @exports
 * @class menu-item
 * @bem
 *
 * @param val Value of item
 */
provide(BEMDOM.decl(this.name,
    /** @lends menu-item.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
            },

            '' : function() {
            }
        }
    },

    getVal : function() {
        return this.params.val;
    },

    _onPointerClick : function() {
        this.hasMod('disabled') || this.emit('click');
    }
}, /** @lends menu-item */{
    live : function() {
        this.liveBindTo('pointerclick', function() {
            this._onPointerClick();
        });
    }
}));

});
