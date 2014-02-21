modules.define({ block : 'input' }, function(provide) {

provide({
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

});
