modules.define('i-bem__dom', ['next-tick'], function(provide, nextTick, DOM) {

/**
 * @namespace i-bem.js реализация блока checkbox
 * @name Checkbox
 */
DOM.decl('checkbox', /** @lends Checkbox.prototype */ {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.setMod('checked', this.elem('control').prop('checked')? 'yes' : '');
                this._isControlFocused() && this.setMod('focused', 'yes');
            }
        },

        'focused' : {
            'yes' : function() {
                if (this.isDisabled()) return false;

                this._isControlFocused() || this.elem('control').focus();

                this.setMod(this.elem('box'), 'focused', 'yes');

                // TODO: заменить на `this.nextTick` после https://github.com/bem/bem-core/issues/71
                nextTick(function() { this.trigger('focus') }.bind(this)); // TODO: убрать bind после https://github.com/bem/bem-core/issues/70
            },

            '' : function() {
                this._isControlFocused() && this.elem('control').blur();

                this.delMod(this.elem('box'), 'focused');

                // TODO: заменить на `this.nextTick` после https://github.com/bem/bem-core/issues/71
                nextTick(function() { this.trigger('blur') }.bind(this)); // TODO: убрать bind после https://github.com/bem/bem-core/issues/70
            }
        },

        'checked' : function(modName, modVal) {
            this.elem('control').prop('checked', modVal === 'yes');

            // TODO: заменить на `this.nextTick` после https://github.com/bem/bem-core/issues/71
            nextTick(function() { this.trigger('change') }.bind(this)); // TODO: убрать bind после https://github.com/bem/bem-core/issues/70

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
     * @param {Boolean} [condition] условие изменения модификатора
     * @returns {this}
     */
    toggle : function(condition) {
        return this.toggleMod('checked', 'yes', condition);
    },

    /**
     * Получить/установить значение контрола
     * @param {String} [val] значение которое нужно установить
     * @returns {String|BEM.DOM}
     */
    val : function(val) {
        var checkbox = this.elem('control');

        if (!arguments.length) return checkbox.val();

        checkbox.val(val);

        return this;
    },

    _onClick : function(e) {
        if (this.isDisabled()) return;

        // для клика по всему, кроме самого инпута, отменяем действие по умолчанию и перекючаем чекбокс сами
        // иначе, при нескольких кликах подряд, чекбокс залипает в неправильном состоянии
        if (e.target !== this.elem('control')[0]) {
            e.preventDefault();
            this.toggle();
        }

        this.setMod('focused', 'yes');
    },

    _onChange : function(e) {
        this.toggleMod('checked', 'yes', e.target.checked);
    },

    /**
     * Обработчик события получения/потери фокуса
     * @param e
     * @private
     */
    _onFocusInFocusOut : function(e) {
        this.toggleMod('focused', 'yes', e.type === 'focusin');
    },

    _onMouseOverMouseOut : function(e) {
        this.isDisabled() ||
            this.toggleMod('hovered', 'yes', e.type === 'mouseover');
    },

    /**
     * Проверяет в фокусе ли контрол
     * @private
     * @returns {Boolean}
     */
    _isControlFocused : function() {
        try {
            return this.containsDomElem($(DOM.doc[0].activeElement));
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

provide(DOM);

});
