/**
 * @module select
 */

modules.define('select', function(provide, Select) {

/**
 * @exports
 * @class select
 * @bem
 */
provide(Select.decl({ modName : 'mode', modVal : 'radio' }, /** @lends select.prototype */{
    _updateControl : function() {
        var val = this.getVal();
        this.elem('control').val(val);
    },

    _updateButton : function() {
        this._button.setText(this._getCheckedItems()[0].getText());
    },

    _onMenuItemClick : function(_, data) {
        data.source === 'pointer' && this.delMod('opened');
    }
}));

});
