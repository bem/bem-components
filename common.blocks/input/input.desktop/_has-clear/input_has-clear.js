modules.define('input', function(provide, Input) {

provide(Input.decl({ modName : 'has-clear', modVal : true }, {
    _onBoxClick : function() {
        this.hasMod(this.elem('clear'), 'visible') || this.setMod('focused');
    }
}, {
    live : function() {
        this.liveBindTo('box', 'pointerclick', function() {
            this._onBoxClick();
        });

        return this.__base.apply(this, arguments);
    }
}));

});
