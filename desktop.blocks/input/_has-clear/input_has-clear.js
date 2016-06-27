modules.define('input', function(provide, Input) {

provide(Input.declMod({ modName : 'has-clear', modVal : true }, {
    _onBoxClick : function() {
        this._elem('clear').hasMod('visible') || this.setMod('focused');
    }
}, {
    lazyInit : true,
    onInit : function() {
        this._domEvents('box').on('pointerclick', function() {
            this._onBoxClick();
        });

        return this.__base.apply(this, arguments);
    }
}));

});
