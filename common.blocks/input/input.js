modules.define('i-bem__dom', ['tick', 'idle'], function(provide, tick, idle, DOM) {

var instances = [],
    bindedToTick,
    update = function () {
        var instance, i = 0;
        while(instance = instances[i++]) {
            instance.val(instance.elem('control').val());
        }
    };

/**
 * @namespace
 * @name Input
 */
DOM.decl('input', /** @lends Input.prototype */ {
    onSetMod : {
        'js' : {
            'inited' : function() {
                // факт подписки
                if(!bindedToTick) {
                    bindedToTick = true;
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

                var control = this.elem('control');

                this._val = control.val();

                // NOTE: если так получилось, что мы уже в фокусе, то синхронизируем состояние
                this.__self.getActiveDomNode() === control[0] &&
                    (this.setMod('focused', 'yes')._focused = true);

                this.bindTo(control, { // TODO: сделать live-событием
                    focus : this._onFocus,
                    blur : this._onBlur
                });
            },

            '' : function() {
                this.params.shortcut && this.unbindFromDoc('keydown'); // TODO: унести тудаже где делается bind -- islands-components/desktop.blocks/input/input.js

                // удаляем из общего массива instances
                instances.splice(this._instanceIndex, 1);
                // понижаем _instanceIndex всем тем кто был добавлен в instances после нас
                var i = this._instanceIndex, instance;
                while(instance = instances[i++]) --instance._instanceIndex;
            }
        },

        'disabled' : function(modName, modVal) {
            this.elem('control').attr('disabled', modVal === 'yes');
        },

        'focused' : function(modName, modVal) {
            if(this.hasMod('disabled', 'yes')) return false;

            var focused = modVal == 'yes';

            focused?
                this._focused || this._focus() :
                this._focused && this._blur();

            this.nextTick(function() { this.trigger(focused? 'focus' : 'blur') });
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
        if(!arguments.length) return this._val;

        if(this._val != val) {
            this._val = val;

            var input = this.elem('control');
            input.val() != val && input.val(val);

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

        if(typeof input.selectionEnd === 'number') {
            end = input.selectionEnd;
        } else {
            var range = DOM.doc[0].selection.createRange();
            if(range && range.parentElement() === input) {
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
    }
}, {
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
