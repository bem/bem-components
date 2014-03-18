modules.define({ block : 'radio', elem : 'option' }, ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl({ block : 'radio', elem : 'option', modName : 'type', modVal : 'button' }, {
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
