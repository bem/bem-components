/**
 * @module dropdown
 */

modules.define(
    'dropdown',
    ['i-bem__dom', 'popup'],
    function(provide, BEMDOM) {

/**
 * @exports
 * @class dropdown
 * @bem
 *
 * @bemmod opened Represents opened state
 */
provide(BEMDOM.decl(this.name, /** @lends dropdown.prototype */{
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
        return this._popup ||
            (this._popup = this.findBlockInside('popup')
                .setTarget(this.getSwitcher())
                .on({ modName : 'visible', modVal : '*' }, this._onPopupVisibilityChange, this));
    },

    /**
     * Returns switcher
     * @returns {i-bem__dom}
     */
    getSwitcher : function() {
        return this._switcher ||
            (this._switcher = this.findBlockInside(this.getMod('switcher')));
    },

    _onPopupVisibilityChange : function(_, data) {
        this.setMod('opened', data.modVal);
    }
}, /** @lends dropdown */{
    live : true,

    /**
     * On BEM click event handler
     * @param {events:Event} e
     * @protected
     */
    onSwitcherClick : function(e) {
        this._switcher || (this._switcher = e.target);
        this.toggleMod('opened');
    }
}));

});
