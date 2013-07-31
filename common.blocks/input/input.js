modules.define('i-bem__dom', function(provide, DOM) {

/**
 * @namespace
 * @name Input
 */
DOM.decl('input', /** @lends Input.prototype */ {
    beforeSetMod : {
        'focused' : {
            true : function() {
                if(this.hasMod('disabled'))
                    return false;
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                var control = this.elem('control');

                this._val = control.val();
                this._focused = false;

                // NOTE: если так получилось, что мы уже в фокусе, то синхронизируем состояние
                this.__self.getActiveDomNode() === control[0] &&
                    (this.setMod('focused')._focused = true);
            }
        },

        'disabled' : function(modName, modVal) {
            this.elem('control').attr('disabled', modVal);
        },

        'focused' : function(modName, modVal) {
            modVal?
                this._focused || this._focus() :
                this._focused && this._blur();

            this.trigger(modVal? 'focus' : 'blur');
        }
    },

    /**
     * Метод для проверки наличия у блока модификатора disabled
     * @protected
     * @return {Boolean} true - если блок находится в отключенном состоянии,
     * false в остальных случаях
     */
    isDisabled : function() {
        return this.hasMod('disabled');
    },

    /**
     * Возвращает/устанавливает текущее значение
     * @param {String} [val] значение
     * @param {Object} [data] дополнительные данные
     * @returns {String|BEM} если передан параметр val, то возвращается сам блок, если не передан -- текущее значение
     */
    val : function(val, data) {
        if(!arguments.length) return this._val;

        val = String(val);

        if(this._val !== val) {
            this._val = val;

            var input = this.elem('control');
            input.val() !== val && input.val(val);

            this.trigger('change', data);
        }

        return this;
    },

    /**
     * @see http://stackoverflow.com/questions/4185821#4186100
     * @return {Number} Позиция конца выделения. Если ничего не выделено, то возвращается 0.
     */
    getSelectionEnd : function() { // TODO: для чего это публичный метод, кто и как им пользуется?
        var input = this.elem('control')[0];
        return typeof input.selectionEnd === 'number'?
            input.selectionEnd :
            0;
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
        return this.setMod('focused');
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
    live : function() {
        this
            .liveBindTo('control', 'focusin', function(e) {
                this._onFocus(e);
            })
            .liveBindTo('control', 'focusout', function(e) {
                this._onBlur(e);
            });

        return false;
    },

    getActiveDomNode : function() {
        // В iframe в IE9: "Error: Unspecified error."
        try { return DOM.doc[0].activeElement } catch (e) {}
    },

    isTextDomNode : function(node) {
        var tag = node.tagName.toLowerCase();
        return tag === 'input' || tag === 'textarea';
    }
});

provide(DOM);

});
