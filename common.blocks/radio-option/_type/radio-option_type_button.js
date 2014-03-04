modules.define('radio-option', function(provide, RadioOption) {

provide(RadioOption.decl({ modName : 'type', modVal : 'button' }, {
    onSetMod : {
        'checked' : proxyMod,
        'disabled' : proxyMod
    },

    _getButton : function() {
        return this.findBlockOn('button');
    }
}));

function proxyMod(modName, modVal) {
    this._getButton().setMod(modName, modVal);
    this.__base.apply(this, arguments);
}

});
