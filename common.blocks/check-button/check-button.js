/**
 * @namespace
 * @name CheckButton
 */
BEM.DOM.decl({ block: 'check-button', baseBlock: 'checkbox' }, /** @lends CheckButton.prototype */ {

    onSetMod : {

        'js' : function() {
            this.__base();

            this.isChecked() &&
                this.setMod('pressed', 'yes');
        },

        'checked' : function(modName, modVal) {
            if(this.__base.apply(this, arguments) === false)
                return false;

            this.toggleMod('pressed', 'yes', '', modVal === 'yes');
        },

        'pressed' : function(modName, modVal) {
            if(this.isDisabled() && !this.isChecked())
                return false;
        }

    },

    _onMouseDown : function(e) {
        e.preventDefault();

        this.isChecked() || this.setMod('pressed', 'yes');

        // XXX: синхронизируем состояние кнопки и чекбокса
        this.bindToDoc('mouseup', function(e) {
            this.afterCurrentEvent(function() {
                this.isChecked() || this.delMod('pressed');
            })

            this.unbindFromDoc('mouseup');
        });
    }

}, /** @lends CheckButton */ {

    live : function() {

        this.__base.apply(this, arguments);

        this.liveBindTo('mousedown', function(e) {
            this._onMouseDown(e);
        });

        return false;

    }

});
