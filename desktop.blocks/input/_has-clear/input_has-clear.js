modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl({ block : 'input', modName : 'has-clear', modVal : true }, {
    _onBoxClick : function() {
        this.hasMod(this.elem('clear'), 'visible') || this.setMod('focused', 'yes');
    }
}, {
    live : function() {
        this.liveBindTo('box', 'pointerclick', function() {
            this._onBoxClick();
        });

        return this.__base.apply(this, arguments);
    }
});

provide(DOM);

});