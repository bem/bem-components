/**
 * @module dropdown
 */

modules.define(
    'dropdown',
    ['i-bem-dom', 'popup', 'dropdown__switcher'],
    function(provide, bemDom, Popup, Switcher) {

/**
 * @exports
 * @class dropdown
 * @bem
 *
 * @bemmod opened Represents opened state
 */
provide(bemDom.declBlock(this.name, /** @lends dropdown.prototype */{
    beforeSetMod : {
        'opened' : {
            'true' : function() {
                if(this.hasMod('disabled')) return false;
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._switcher = null;
                this._popup = null;
            }
        },

        'opened' : function(_, modVal) {
            this.getPopup().setMod('visible', modVal);
            this._switcher.domElem.attr('aria-expanded', !!modVal);
        },

        'disabled' : {
            '*' : function(modName, modVal) {
                this.getSwitcher().setMod(modName, modVal);
            },

            'true' : function() {
                this.getPopup().delMod('visible');
            }
        }
    },

    /**
     * Returns popup
     * @returns {popup}
     */
    getPopup : function() {
        if(this._popup) return this._popup;

        this._popup = this.findMixedBlock(Popup).setAnchor(this.getSwitcher());
        this._popup._events().on({ modName : 'visible', modVal : '*' }, this._onPopupVisibilityChange, this);
        return this._popup;
    },

    /**
     * Returns switcher
     * @returns {i-bem-dom}
     */
    getSwitcher : function() {
        return this._switcher ||
            (this._switcher = this.findMixedBlock(this._getSwitcherClass()));
    },

    _getSwitcherClass : function() {
        return bemDom.declBlock(this.getMod('switcher'));
    },

    /**
     * On BEM click event handler
     * @param {events:Event} e
     * @protected
     */
    _onSwitcherClick : function(e) {
        this._switcher || (this._switcher = e.target);
        this.toggleMod('opened');
    },

    _onPopupVisibilityChange : function(_, data) {
        this.setMod('opened', data.modVal);
    }
}, /** @lends dropdown */{
    lazyInit : true,
    onInit : function() {
        this._events(Switcher).on('click', this.prototype._onSwitcherClick);
    }
}));

});
