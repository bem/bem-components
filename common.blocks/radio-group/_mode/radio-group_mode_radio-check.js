modules.define('radio-group', function(provide, RadioGroup) {

var undef;

provide(RadioGroup.decl({ modName : 'mode', modVal : 'radio-check' }, {
    _onRadioUncheck : function(e) {
        this._checkedRadio === e.target && this.setVal(undef);
    }
}, {
    live : function() {
        this.liveInitOnBlockInsideEvent(
            { modName : 'checked', modVal : '' },
            'radio',
            this.prototype._onRadioUncheck);

        return this.__base.apply(this, arguments);
    }
}));

});
