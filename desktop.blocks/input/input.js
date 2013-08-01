modules.define('i-bem__dom', ['tick', 'idle'], function(provide, tick, idle, DOM) {

var instances = [],
    boundToTick,
    update = function () {
        var instance, i = 0;
        while(instance = instances[i++]) {
            instance.val(instance.elem('control').val());
        }
    };

DOM.decl('input', {
    onSetMod : {
        'js' : {
            'inited': function() {
                this.__base.apply(this, arguments);

                // факт подписки
                if(!boundToTick) {
                    boundToTick = true;
                    tick
                        .on('tick', update)
                        .start();
                    idle
                        .on({
                            idle   : function() {
                                tick.un('tick', update);
                            },
                            wakeup : function() {
                                tick.on('tick', update);
                            }
                        })
                        .start();
                }

                // сохраняем индекс в массиве инстансов чтобы потом быстро из него удалять
                this._instanceIndex = instances.push(this) - 1;

                /*Исправление для ошибки при которой в IE при вводе длинной строки после потери фокуса
                 текст остается выровненным по правому краю */
                var input = this.elem('control')[0];
                input.attachEvent && input.attachEvent('onbeforedeactivate', this._onBeforeDeactivate);
            },

            '' : function() {
                this.params.shortcut && this.unbindFromDoc('keydown'); // TODO: унести тудаже где делается bind -- islands-components/desktop.blocks/input/input.js

                // удаляем из общего массива instances
                instances.splice(this._instanceIndex, 1);
                // понижаем _instanceIndex всем тем кто был добавлен в instances после нас
                var i = this._instanceIndex, instance;
                while(instance = instances[i++]) --instance._instanceIndex;
            }
        }
    },

    getSelectionEnd : function() {
        var input = this.elem('control')[0];

        if(typeof input.selectionEnd === 'number') {
            return this.__base();
        }

        var res = 0,
            range = DOM.doc[0].selection.createRange();

        if(range && range.parentElement() === input) {
            var len = input.value.length,
                textInputRange = input.createTextRange();
            textInputRange.moveToBookmark(range.getBookmark());

            var endRange = input.createTextRange();
            endRange.collapse(false);
            res = textInputRange.compareEndPoints('EndToEnd', endRange) > -1 ?
                len :
                -textInputRange.moveEnd('character', -len);
        }

        return res;
    },

    /**
     * Доопределяем обработчик события blur
     * для показа начала длинной строки в FF
     * @private
     */
    _onBlur : function() {
        this.__base.apply(this, arguments);

        var input = this.elem('control')[0];
        if(input.selectionStart && input.selectionEnd) {
            input.selectionStart = input.selectionEnd = 0;
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
});

provide(DOM);

});
