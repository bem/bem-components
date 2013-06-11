/**
 * @namespace i-bem.js реализация блока checkbox
 * @name Checkbox
 */
BEM.DOM.decl('checkbox', /** @lends Checkbox.prototype */ {

    onSetMod : {

        'js' : function() {

            this.setMod('checked', this.elem('control').prop('checked')? 'yes' : '');
            this._isControlFocused() && this.setMod('focused', 'yes');

        },

        'focused' : {

            'yes' : function() {

                if (this.isDisabled())
                    return false;

                this._isControlFocused() || this.elem('control').focus();
                
                this.setMod(this.elem('box'), 'focused', 'yes');

                this.afterCurrentEvent(function() {
                    this.trigger('focus');
                });
            },

            '' : function() {

                this._isControlFocused() && this.elem('control').blur();
                
                this.delMod(this.elem('box'), 'focused');

                this.afterCurrentEvent(function() {
                    this.trigger('blur');
                });
            }

        },

        'checked' : function(modName, modVal) {

            this.elem('control').prop('checked', modVal === 'yes');

            this.afterCurrentEvent(function(){
               this.trigger('change');
            });

            this.setMod(this.elem('box'), 'checked', modVal);
        },

        'disabled' : function(modName, modVal) {

            this.elem('control').prop('disabled', modVal === 'yes');
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
        if (this.isDisabled())
            return;

        // для клика по всему, кроме самого инпута, отменяем действие по умолчанию и перекючаем чекбокс сами
        // иначе, при нескольких кликах подряд, чекбокс залипает в неправильном состоянии
        if (e.target !== this.elem('control')[0]) {
            e.preventDefault();

            this.toggle();
        }

        this.setMod('focused', 'yes');
    },

    _onChange : function(e) {
        e.target.checked?
            this.setMod('checked', 'yes') :
            this.delMod('checked');
    },

    /**
     * Обработчик события получения/потери фокуса
     * @param e
     * @private
     */
    _onFocusInFocusOut : function(e) {
        this.setMod('focused', e.type === 'focusin'? 'yes' : '');
    },

    _onMouseOverMouseOut : function(e) {
        this.isDisabled() ||
            this.setMod('hovered', e.type === 'mouseover'? 'yes' : '');
    },

    /**
     * Проверяет в фокусе ли контрол
     * @private
     * @returns {Boolean}
     */
    _isControlFocused : function() {
        try {
            return this.containsDomElem($(this.__self.doc[0].activeElement));
        } catch(e) {
            return false;
        }
    }

}, /** @lends Checkbox */{

    live : function() {

        this
            .liveBindTo('leftclick', function(e) {
                this._onClick(e);
            })
            .liveBindTo('control', 'change', function(e) {
                this._onChange(e);
            })
            .liveBindTo('control', 'focusin focusout', function(e) {
                this._onFocusInFocusOut(e);
            })
            .liveBindTo('mouseover mouseout', function(e) {
                this._onMouseOverMouseOut(e);
            });

        return false;
    }
});
