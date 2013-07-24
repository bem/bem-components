modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('input', {
    _onBoxClick : function() {
        var clearElem = this.elem('clear');
        if(clearElem.length && !this.hasMod(clearElem, 'visibility', 'visible')) {
            this.setMod('focused', 'yes');
        }
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