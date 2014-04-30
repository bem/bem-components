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
        this.hasMod('disabled') || this.setMod('focused');
    }
}, {
    live : function() {
        return this
            .liveBindTo(
                { modName : 'type', modVal : 'button' },
                'pointerclick',
                this.prototype._onPointerClick)
            .__base.apply(this, arguments);
    }
}));

function proxyMod(modName, modVal) {
    this._getButton().setMod(modName, modVal);
    this.__base.apply(this, arguments);
}

});
