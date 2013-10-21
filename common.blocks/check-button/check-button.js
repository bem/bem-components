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

            this._origTabindex = this.elem('control').attr('tabindex') || 0;
            this.elem('control').attr('tabindex', -1);

            var disabled = this.hasMod('disabled', 'yes');

            this.domElem.attr({
                role: 'button',
                tabindex: disabled ? -1 : this._origTabindex,
                'aria-labelledby': this.elem('text').attr('id'),
                'aria-disabled': disabled,
                'aria-pressed': this.hasMod('checked', 'yes')
            });

            this.bindTo('keyup', function(e) {
                if (e.shiftKey || e.ctrlKey || e.altKey) return;

                if (e.which === 13 || e.which === 32) { /* ENTER || SPACE */
                    this.elem('control').click();
                }
            });
        },

        'checked' : function(modName, modVal) {
            if(this.__base.apply(this, arguments) === false)
                return false;

            var checked = modVal === 'yes';
            this.toggleMod('pressed', 'yes', '', checked);
            this.domElem.attr('aria-pressed', checked);
        },

        'disabled' : function(modName, modVal) {
            this.__base.apply(this, arguments);

            var disabled = modVal === 'yes';
            this.domElem.attr({
                'aria-disabled': disabled,
                tabindex: disabled ? -1 : this._origTabindex
            });
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
        this.bindToDoc('mouseup', function(e) {
            this.afterCurrentEvent(function() {
                this.delMod('pressed');
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
