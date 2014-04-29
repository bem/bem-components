modules.define('radio', function(provide, Radio) {

provide(Radio.decl({ modName : 'type', modVal : 'button' }, {
    onSetMod : {
        'checked' : proxyMod,
        'disabled' : proxyMod
    },

    _getButton : function() {
        return this.findBlockOn('button');
    },

    _onPointerClick : function() {
        this.__base.apply(this, arguments);
        this.hasMod('disabled') || this.setMod('focused');
    }
}));

function proxyMod(modName, modVal) {
    this._getButton().setMod(modName, modVal);
    this.__base.apply(this, arguments);
}

});
