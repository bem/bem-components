/**
 * @module select
 */

modules.define(
    'select',
    ['strings__escape'],
    function(provide, escape, Select) {

/**
 * @exports
 * @class select
 * @bem
 */
provide(Select.decl({ modName : 'mode', modVal : 'check' }, /** @lends select.prototype */{
    _updateControl : function() {
        this.elem('control').remove();
        this.dropElemCache('control');

        var name = this.getName();
        this.domElem.prepend(
            this.getVal()
                .map(function(val) {
                    return Select._createControlHTML(name, val);
                }));
    },

    _updateButton : function() {
        var checkedItems = this._getCheckedItems();

        this._button
            .toggleMod('checked', true, '', !!checkedItems.length)
            .setText(
                checkedItems.length === 1?
                    checkedItems[0].getText() : // one checked
                    checkedItems.reduce(function(res, item) { // many checked
                        return res + (res? ', ' : '') + (item.params.checkedText || item.getText());
                    }, '') ||
                        this.params.text); // none checked
    },

    _setSingleVal : function(value) {
        this.setVal([value]);
    },

    _onMenuItemClick : function(_, data) {
        data.source === 'keyboard' && (this._preventToToggleOpened = true);
    },

    _onButtonClick : function() {
        this._preventToToggleOpened?
            this._preventToToggleOpened = false :
            this.__base.apply(this, arguments);
    }
}));

});
