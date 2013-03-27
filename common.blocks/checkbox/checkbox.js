/**
 * @namespace i-bem.js реализация блока checkbox
 * @name Checkbox
 */
BEM.DOM.decl('checkbox', /** @lends Checkbox.prototype */ {

    onSetMod : {

        'js' : function() {

            var _this = this,
                checkboxElem = _this.elem('control');

            try {
                // В iframe в IE9 происходит "Error: Unspecified error."
                var activeNode = _this.__self.doc[0].activeElement;
            } catch(e) {}

            _this.setMod('checked', checkboxElem.attr('checked')? 'yes' : '');
            activeNode === checkboxElem[0] && _this.setMod('focused', 'yes');

        },

        'focused' : {

            'yes' : function() {

                if (this.isDisabled())
                    return false;

                this.elem('control').focus();
                this.setMod(this.elem('box'), 'focused', 'yes');

                this.afterCurrentEvent(function() {
                    this.trigger('focus');
                });
            },

            '' : function() {

                this.elem('control').blur();
                this.delMod(this.elem('box'), 'focused');

                this.afterCurrentEvent(function() {
                    this.trigger('blur');
                });
            }

        },

        'checked' : function(modName, modVal) {

            this.elem('control').attr('checked', modVal == 'yes');

            this.afterCurrentEvent(function(){
               this.trigger('change');
            });

            this.toggleMod(this.elem('box'), 'checked', 'yes', modVal == 'yes');
        },

        'disabled' : function(modName, modVal) {

            this.elem('control').attr('disabled', modVal === 'yes');
        }

    },

    /**
     * Шорткат для проверки модификатора `_disabled_yes`
     * @returns {Boolean}
     */
    isDisabled : function() {
        return this.hasMod('disabled', 'yes');
    },

    /**
     * Шоткат для проверки модификатора `_checked_yes`
     * @returns {Boolean}
     */
    isChecked : function() {
        return this.hasMod('checked', 'yes');
    },

    /**
     * Хелпер для переключения модификатора `_checked_yes`
     */
    toggle : function() {
        this.toggleMod('checked', 'yes', '');
    },

    /**
     * Получить/установить значение контрола
     * @param {String} [val] значение которое нужно установить
     * @returns {String|BEM.DOM}
     */
    val : function(val) {
        var checkbox = this.elem('control');

        if (typeof val === 'undefined')
            return checkbox.val();

        checkbox.val(val);

        return this;
    },

    _onClick : function(e) {
        // Нам нужен только клик левой кнопки мыши и нажатие пробела
        if (e.button) return;

        this.isDisabled() || this.setMod('focused', 'yes');
    },

    _onChange : function(e) {
        e.target.checked?
            this.setMod('checked', 'yes') :
            this.delMod('checked');
    }

}, /** @lends Checkbox */{

    live : function() {

        this
            .liveBindTo('control', 'click', function(e) {
                this._onClick(e);
            })
            .liveBindTo('control', 'change', function(e) {
                this._onChange(e);
            })
            .liveBindTo('control', 'focusin focusout', function(e) {
                this.setMod('focused', e.type === 'focusin'? 'yes' : '');
            })
            .liveBindTo('control', 'mouseover mouseout', function(e) {
                this.isDisabled() ||
                    this.setMod('hovered', e.type === 'mouseover'? 'yes' : '');
            });

        return false;
    }

});
