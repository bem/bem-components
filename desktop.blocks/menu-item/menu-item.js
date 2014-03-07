modules.define('menu-item', function(provide, MenuItem) {

provide(MenuItem.decl({
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.bindTo('mouseleave', this._onMouseLeave);
            }
        },

        'disabled' : {
            'true' : function() {
                this.__base.apply(this, arguments);
                this.delMod('hovered');
            }
        }
    },

    _onMouseOver : function() {
        this.setMod('hovered');
    },

    _onMouseLeave : function() {
        this.delMod('hovered');
    }
}, {
    live : function() {
        this.liveBindTo('mouseover', function() {
            this._onMouseOver();
        });

        return this.__base.apply(this, arguments);
    }
}));

});
