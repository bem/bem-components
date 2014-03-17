modules.define('checkbox', ['i-bem__dom', 'base-control'], function(provide, BEMDOM, BaseControl) {

provide(BEMDOM.decl({ block : this.name, baseBlock : BaseControl }, {
    onSetMod : {
        'checked' : function(modName, modVal) {
            this.elem('control').prop(modName, modVal);
            this.emit('change');
        }
    },

    _onChange : function() {
        this.setMod('checked', this.elem('control').prop('checked'));
    }
}, {
    live : function() {
        this.liveBindTo('control', 'change', this.prototype._onChange);
        return this.__base.apply(this, arguments);
    }
}));

});
