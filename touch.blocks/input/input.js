modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('input', null, {
    live : function() {
        this.liveBindTo('clear', 'pointerdown', function() {
            this._onClearClick();
        });
        return false;
    }
});

provide(DOM);

});
