/**
 * @module cut
 */

modules.define('cut', ['i-bem__dom'], function(provide, BEMDOM) {

/**
 * @exports
 * @class cut
 * @bem
 */
provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._switcher = null;
                this._popup = null;
                this._params = {
                    expanded : this.params.expandedText  || 'Hide',
                    collapsed : this.getSwitcher().text() || 'Show'
                };
            }
        },

        'opened' : function(modName, modVal) {
            this.setMod((this.getSwitcher()), 'opened', modVal);
            this.setMod((this.getContainer()), 'visible', modVal);

            this._switcherTextChange();
        }
    },

    _switcherTextChange : function() {
        var text = this.hasMod('opened')? this._params.expanded : this._params.collapsed;

        this._switcher.html(text);
    },

    /**
     * Returns switcher
     * @returns {i-bem__dom}
     */
    getSwitcher : function() {
        return this._switcher ||
            (this._switcher = this.findElem('switcher', true));
    },

    /**
     * Returns container
     * @returns {i-bem__dom}
     */
    getContainer : function() {
        return this._container ||
            (this._container = this.findElem('container', true));
    },

    /**
     * On BEM click event handler
     * @param {events:Event} e
     * @protected
     */
    onSwitcherClick : function(e) {
        e.preventDefault();

        this.toggleMod('opened');
    }

}, {
    live : function() {
        this.liveBindTo('switcher', 'click', this.prototype.onSwitcherClick);
    }
}));

});
