/**
 * @module select
 */

modules.define('select', function(provide, Select) {

/**
 * @exports
 * @class select
 * @bem
 */
provide(Select.decl({ modName : 'type', modVal : 'radio' }, /** @lends select.prototype */{
    _updateControl : function() {
        this.elem('control').val(JSON.stringify(this.getVal()));
    },

    _updateButton : function() {
        this._button.setText(this._getCheckedItems()[0].getText());
    },

    _onMenuItemClick : function(_, data) {
        data.source === 'pointer' && this.delMod('opened');
    }
}));

});
