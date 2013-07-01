/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('input', /** @lends Block.prototype */ {

    onSetMod : {

        js : {

            'inited': function() {

                this.__base.apply(this, arguments);

                var _this = this;

                /*Исправление для ошибки при которой в IE при вводе длинной строки после потери фокуса
                текст остается выровненным по правому краю */
                var input = this.elem('control')[0];
                input.attachEvent && input.attachEvent('onbeforedeactivate', this._onBeforeDeactivate);
            }
        }
    },

    /**
     * Доопределяем обработчик события blur
     * для показа начала длинной строки в FF
     * @private
     */
    _onBlur : function() {
        this.__base.apply(this, arguments);

        /*Данный код необходим только для выполнения в браузере FF. Исправление для LEGO-9163*/
        if(/firefox/i.test(navigator.userAgent)) {
            var input = this.elem('control')[0];

            if(input.selectionStart && input.selectionEnd) {
                input.selectionStart = input.selectionEnd = 0;
            }
        }
    },

    /**
     * Перед снятием фокуса делаем видимым начало длинной строки в IE
     * @param  {Object} e объект события
     * @private
     */
    _onBeforeDeactivate: function(e) {
        var input = e.target || e.srcElement;

        if(input.createTextRange) {
            var range = input.createTextRange();
            range.collapse(true);
            range.select();
        }
    },

    /**
     * Нормализация установки фокуса для IE
     * @private
     */
    _focus : function() {

        var input = this.elem('control')[0];
        if(input.createTextRange && !input.selectionStart) {
            var range = input.createTextRange();
            range.move('character', input.value.length);
            range.select();
        } else {
            input.focus();
        }
    }
}, {

});
