modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('input', {
    _onInputChanged : function() {
        this.setVal(this.elem('control').val());
    }
}, {
    live : function() {
        this.liveBindTo('control', 'input', function() {
            this._onInputChanged();
        });

        return this.__base.apply(this, arguments);
    }
});

provide(DOM);

});