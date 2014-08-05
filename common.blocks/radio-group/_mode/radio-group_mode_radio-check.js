/**
 * @module radio-group
 */

modules.define('radio-group', function(provide, RadioGroup) {

var undef;

/**
 * @exports
 * @class radio-group
 * @bem
 */
provide(RadioGroup.decl({ modName : 'mode', modVal : 'radio-check' }, /** @lends radio-group.prototype */{
    _onRadioUncheck : function(e) {
        this._checkedRadio === e.target && this.setVal(undef);
    }
}, /** @lends radio-group */{
    live : function() {
        this.liveInitOnBlockInsideEvent(
            { modName : 'checked', modVal : '' },
            'radio',
            this.prototype._onRadioUncheck);

        return this.__base.apply(this, arguments);
    }
}));

});
