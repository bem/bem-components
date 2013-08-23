modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

BEMDOM.decl('radio-option', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.setMod('checked', this.elem('control').prop('checked')); // sync state
            }
        },

        'checked' : function(modName, modVal) {
            this.elem('control').prop(modName, modVal);
            this.emit(modVal? 'check' : 'uncheck');
        },

        'disabled' : function(modName, modVal) {
            this.elem('control').prop(modName, modVal);
            this.emit(modVal? 'disable' : 'enable');
        }
    },

    /**
     * Returns control value
     * @returns {String}
     */
    getVal : function() {
        return this.elem('control').val();
    },

    /**
     * Returns name of control
     * @returns {String}
     */
    getName : function() {
        return this.elem('control').attr('name');
    },

    _onPointerClick : function() {
        this.setMod('checked');
    }
}, {
    live : function() {
        this.liveBindTo('pointerclick', function() {
            this._onPointerClick();
        });

        return false;
    }
});

provide(BEMDOM);

});