(function() {

var instances,
    sysChannel,
    update = function () {
        var instance, i = 0;
        while(instance = instances[i++]) instance.val(instance.elem('control').val());
    },
    getActiveElement = function (doc) {
        // В iframe в IE9: "Error: Unspecified error."
        try { return doc.activeElement } catch (e) {}
    };

/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('input', /** @lends Block.prototype */ {

    onSetMod : {

        'js' : function() {

            var _this = this,
                input = _this.elem('control'),
                activeElement = getActiveElement(_this.__self.doc[0]),
                haveToSetAutoFocus =
                    _this.params.autoFocus &&
                        !(activeElement && $(activeElement).is('input, textarea'));

            _this._val = input.val();

            if (activeElement === input[0] || haveToSetAutoFocus) {
                _this.setMod('focused', 'yes')._focused = true;
            }

            // факт подписки
            if(!sysChannel) {
                instances = [];
                sysChannel = _this.channel('sys')
                    .on({
                        'tick' : update,
                        'idle' : function() {
                            sysChannel.un('tick', update);
                        },
                        'wakeup' : function() {
                            sysChannel.on('tick', update);
                        }});
            }

            // сохраняем индекс в массиве инстансов чтобы потом быстро из него удалять
            _this._instanceIndex = instances.push(
                _this.bindTo(input, {
                    focus : _this._onFocus,
                    blur  : _this._onBlur
                })
            ) - 1;

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

        if(this._val != val) {
            var input = this.elem('control');
            input.val() != val && input.val(val);
            this._val = val;
            this.trigger('change', data);
        }

        return this;

    },

    /**
     * @see http://stackoverflow.com/questions/4185821#4186100
     * @return {Number} Позиция конца выделения. Если ничего не выделено, то возвращается 0.
     */
    getSelectionEnd : function() {
        var input = this.elem('control')[0],
            end = 0;
        if(typeof(input.selectionEnd) == 'number') {
            end = input.selectionEnd;
        } else {
            var range = document.selection.createRange();
            if(range && range.parentElement() == input) {
                var len = input.value.length,
                    textInputRange = input.createTextRange();
                textInputRange.moveToBookmark(range.getBookmark());

                var endRange = input.createTextRange();
                endRange.collapse(false);
                end = textInputRange.compareEndPoints('EndToEnd', endRange) > -1 ?
                    len :
                    -textInputRange.moveEnd('character', -len);
            }
        }
        return end;
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
    },

    destruct : function() {

        this.__base.apply(this, arguments);

        this.params.shortcut && this.unbindFromDoc('keydown');
        instances.splice(this._instanceIndex, 1);

        var i = this._instanceIndex,
            instance;

        while(instance = instances[i++]) --instance._instanceIndex;

    }

}, {

});

})();
