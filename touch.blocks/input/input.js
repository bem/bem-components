modules.define('input', function(provide, Input) {

provide(Input.decl({
    _onInputChanged : function() {
        this.setVal(this.elem('control').val());
    }
}, {
    live : function() {
        this.liveBindTo('control', 'input', this.prototype._onInputChanged);
        return this.__base.apply(this, arguments);
    }
}));

});
