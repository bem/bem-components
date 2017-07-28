/**
 * @module menu__item
 */

modules.define('menu__item', ['i-bem-dom'], function(provide, bemDom) {

/**
 * @exports
 * @class menu__item
 * @bem
 *
 * @param val Value of item
 */
provide(bemDom.declElem('menu', 'item', /** @lends menu__item.prototype */{
    beforeSetMod : {
        'hovered' : {
            'true' : function() {
                return !this.hasMod('disabled');
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._domEvents().on('pointerleave', this._onPointerLeave);
            }
        },

        'disabled' : {
            'true' : function() {
                this
                    .delMod('hovered')
                    .domElem.attr('aria-disabled', true);
            },
            '' : function() {
                this.domElem.removeAttr('aria-disabled');
            }
        },

        'checked' : {
            '*' : function(_, modVal) {
                this.domElem.attr('aria-checked', !!modVal);
            }
        }
    },

    /**
     * Checks whether given value is equal to current value
     * @param {String|Number} val
     * @returns {Boolean}
     */
    isValEq : function(val) {
        // NOTE: String(true) == String(1) -> false
        return String(this.params.val) === String(val);
    },

    /**
     * Returns item value
     * @returns {*}
     */
    getVal : function() {
        return this.params.val;
    },

    /**
     * Returns item text
     * @returns {String}
     */
    getText : function() {
        return this.params.text || this.domElem.text();
    },

    _onPointerMove : function() {
        this.setMod('hovered');
    },

    _onPointerLeave : function() {
        this.delMod('hovered');
    },

    _onPointerClick : function() {
        this.hasMod('disabled') || this._emit('click', { source : 'pointer' });
    }
}, /** @lends menu__item */{
    lazyInit : true,
    onInit : function() {
        var ptp = this.prototype;

        this._domEvents()
            .on('pointermove', ptp._onPointerMove)
            .on('pointerclick', ptp._onPointerClick);
    }
}));

});
