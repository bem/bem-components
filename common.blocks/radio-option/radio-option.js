modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

BEMDOM.decl('radio-option', {
    onSetMod : {
        'checked' : function(modName, modVal) {
            this.elem('control').prop(modName, modVal);
            modVal && this.emit('check');
        },

        'disabled' : function(modName, modVal) {
            this.elem('control').prop(modName, modVal);
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
        this.hasMod('disabled') || this.setMod('checked');
    }
}, {
    live : function() {
        this.liveBindTo('pointerclick', function() {
            this._onPointerClick();
        });
    }
});

provide(BEMDOM);

});