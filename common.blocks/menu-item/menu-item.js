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
provide(BEMDOM.decl(this.name, /** @lends menu-item.prototype */{
    beforeSetMod : {
        'hovered' : {
            'true' : function() {
                return !this.hasMod('disabled');
            }
        }
    },

    /**
     * Checks whether given value is equal to current value
     * @param {*} val
     * @returns {Boolean}
     */
    isValEq : function(val) {
        var thisVal = this.params.val;
        return typeof thisVal === 'object'?
            JSON.stringify(thisVal) === JSON.stringify(val) :
            thisVal === val;
    },

    /**
     * Returns item value
     * @returns {*}
     */
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
