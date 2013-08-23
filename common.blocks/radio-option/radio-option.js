modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

BEMDOM.decl('radio-option', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.setMod('checked', this.elem('control').prop('checked')); // sync state
            }
        },

        'checked' : function(_, modVal) {
            this.trigger(modVal? 'check' : 'uncheck');
        },

        'disabled' : function(modName, modVal) {
            this.elem('control').prop(modName, modVal);
        }
    },

    getVal : function() {
        return this.elem('control').val();
    },

    _onPointerClick : function() {
        this.setMod('checked');
    }
}, {
    live : function() {
        this.liveBindTo('control', 'pointerclick', function() {
            this._onPointerClick();
        });

        return false;
    }
});

provide(BEMDOM);

});