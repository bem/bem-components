/** @module control */

modules.define(
    'control', ['i-bem-dom'],
    function(provide, bemDom, Control) {

provide(bemDom.declBlock(Control, {
    beforeSetMod : {
        'hovered' : {
            'true' : function() {
                return !this.hasMod('disabled');
            }
        }
    },

    onSetMod : {
        'disabled' : {
            'true' : function() {
                this.__base.apply(this, arguments);
                this.delMod('hovered');
            }
        },

        'hovered' : {
            'true' : function() {
                this._domEvents().on('mouseleave', this._onMouseLeave);
            },

            '' : function() {
                this._domEvents().un('mouseleave', this._onMouseLeave);
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
    onInit : function() {
        this._domEvents().on('mouseover', this.prototype._onMouseOver);
        return this.__base.apply(this, arguments);
    }
}));

});
