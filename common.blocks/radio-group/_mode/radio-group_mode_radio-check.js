/**
 * @module radio-group
 */

modules.define('radio-group', ['radio'], function(provide, Radio, RadioGroup) {

var undef;

/**
 * @exports
 * @class radio-group
 * @bem
 */
provide(RadioGroup.declMod({ modName : 'mode', modVal : 'radio-check' }, /** @lends radio-group.prototype */{
    _onRadioUncheck : function(e) {
        this._checkedRadio === e.target && this.setVal(undef);
    }
}, /** @lends radio-group */{
    lazyInit : true,
    onInit : function() {
        this._events(Radio).on(
            { modName : 'checked', modVal : '' },
            this.prototype._onRadioUncheck);

        return this.__base.apply(this, arguments);
    }
}));

});
