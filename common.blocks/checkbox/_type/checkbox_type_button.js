modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl({ block : 'checkbox', modName : 'type', modVal : 'button' }, {
    onSetMod : {
        'checked' : proxyMod,
        'disabled' : proxyMod
    },

    _getButton : function() {
        return this.findBlockOn('button');
    }
});

function proxyMod(modName, modVal) {
    this._getButton().setMod(modName, modVal);
    this.__base.apply(this, arguments);
}

provide(BEMDOM);

});