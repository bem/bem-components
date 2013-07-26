modules.define('i-bem__dom', ['next-tick'], function(provide, nextTick, DOM) {

/**
 * @namespace
 * @name CheckButton
 */
DOM.decl({ block: 'check-button', baseBlock: 'checkbox' }, /** @lends CheckButton.prototype */ {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this.isChecked() && this.setMod('pressed', 'yes');
            }
        },

        'checked' : function(modName, modVal) {
            if(this.__base.apply(this, arguments) === false)
                return false;

            this.toggleMod('pressed', 'yes', modVal === 'yes');
        },

        'pressed' : function(modName, modVal) {
            if(this.isDisabled() && !this.isChecked())
                return false;
        }
    },

    _onMouseDown : function(e) {
        e.preventDefault();

        this.setMod('pressed', 'yes');

        // XXX: синхронизируем состояние кнопки и чекбокса
        // TODO: использовать https://github.com/bem/bem-core/issues/73
        this.bindToDoc('mouseup', function(e) {
            // TODO: заменить на `this.nextTick` после https://github.com/bem/bem-core/issues/71
            nextTick(function() {
                this.delMod('pressed');
            }.bind(this)); // TODO: убрать bind после https://github.com/bem/bem-core/issues/70

            this.unbindFromDoc('mouseup');
        });
    }

}, /** @lends CheckButton */ {
    live : function() {
        this.__base.apply(this, arguments);
        this.liveBindTo('mousedown', function(e) { this._onMouseDown(e) });
        return false;
    }
});

provide(DOM);

});
