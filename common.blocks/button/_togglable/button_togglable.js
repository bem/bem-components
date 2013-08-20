modules.define('i-bem__dom', ['jquery', 'dom', 'functions'], function(provide, $, dom, functions, BEMDOM) {

BEMDOM.decl({ block : 'button', modName : 'togglable', modVal : true }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._pressed = this.hasMod('pressed'); // we need separate real pressed state from visual mod
            }
        },

        'disabled' : {
            true : functions.noop // prevent default action
        }
    },

    press : function() {
        if(!this._pressed) {
            this._pressed = true;
            this.setMod('pressed');
        }

        return this;
    },

    release : function() {
        if(this._pressed) {
            this._pressed = false;
            this.delMod('pressed');
        }

        return this;
    },

    toggle : function() {
        return this._pressed?
            this.release() :
            this.press();
    },

    isPressed : function() {
        return this._pressed;
    },

    _onPointerUp : function(e) {
        this.unbindFromDoc('pointerup', this._onPointerUp);
        if(dom.contains(this.domElem, $(e.target))) {
            this._pressed && this.delMod('pressed');
            this._pressed = !this._pressed;
        } else if(!this._pressed) {
            this.delMod('pressed');
        }
    }
});

provide(BEMDOM);

});