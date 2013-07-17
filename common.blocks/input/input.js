/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('input', /** @lends Block.prototype */ {

    onSetMod : {

        'js' : function() {

            this._val = this.elem('control').val();
            this.bindFocus();

        },

        'disabled' : function(modName, modVal) {
            this.elem('control').attr('disabled', modVal === 'yes');
        },

        'focused' : function(modName, modVal) {

            if(this.hasMod('disabled', 'yes'))
                return false;

            var focused = modVal == 'yes';

            focused?
                this._focused || this._focus() :
                this._focused && this._blur();

            this.afterCurrentEvent(function() {
                this.trigger(focused? 'focus' : 'blur');
            });

        }

    },

    bindFocus : function() {

        this.bindTo(this.elem('control'), {
            focus : this._onFocus,
            blur  : this._onBlur
        });

    },

    /**
     * Метод для проверки наличия у блока модификатора disabled
     * @protected
     * @return {Boolean} true - если блок находится в отключенном состоянии,
     * false в остальных случаях
     */
    isDisabled : function() {
        return this.hasMod('disabled', 'yes');
    },

    /**
     * Возвращает/устанавливает текущее значение
     * @param {String} [val] значение
     * @param {Object} [data] дополнительные данные
     * @returns {String|BEM} если передан параметр val, то возвращается сам блок, если не передан -- текущее значение
     */
    val : function(val, data) {

        if(typeof val == 'undefined') return this._val;

        var input = this.elem('control');
        input.val() != val && input.val(val);
        this._val = val;
        this.trigger('change', data);

        return this;

    },

    /**
     * Метод для возврата имени нативного контрола
     * @param  {[type]} name [description]
     * @return {String} имя нативного контрола
     */
    name : function(name) {
        return this.elem('control').attr('name');
    },

    /**
     * Обработчик события выставления фокуса на элемент control блока
     * @return {Object} экземпляр блока input
     */
    _onFocus : function() {

        this._focused = true;
        return this.setMod('focused', 'yes');

    },

    /**
     * Обработчик события сброса фокуса с элемента control блока input
     * @return {Object} экземпляр блока input
     */
    _onBlur : function() {

        this._focused = false;
        return this.delMod('focused');

    },

    /**
     * Выставляем фокус для элемента control
     * @private
     */
    _focus : function() {
        this.elem('control').focus();
    },

    /**
     * Убираем фокус с элемента control
     * @private
     */
    _blur : function() {
        this.elem('control').blur();
    }

}, {

});
