/**
 * @module i-bem__dom
 */

modules.define('i-bem__dom', function(provide, BEMDOM) {

/**
 * @exports i-bem__dom:blocks.dropdown
 * @class dropdown
 * @bem
 *
 * @bemmod opened Represents opened state
 */
BEMDOM.decl('dropdown', /** @lends dropdown.prototype */{
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
            this.emit(modVal? 'open' : 'close');
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
     * @returns {i-bem__dom:blocks.popup}
     */
    getPopup : function() {
        return this._popup ||
            (this._popup = this.findBlockInside('popup')
                .setTarget(this.getSwitcher())
                .on('show hide', this._onPopupVisibilityChange, this));
    },

    /**
     * Returns switcher
     * @returns {i-bem__dom}
     */
    getSwitcher : function() {
        return this._switcher ||
            (this._switcher = this.findBlockInside(this.getMod('switcher')));
    },

    _onPopupVisibilityChange : function() {
        this.setMod('opened', this.getPopup().getMod('visible'));
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
});

provide(BEMDOM);

});
