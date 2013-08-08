modules.define('i-bem__dom', ['tick', 'idle'], function(provide, tick, idle, DOM) {

var instances = [],
    boundToTick,
    update = function () {
        var instance, i = 0;
        while(instance = instances[i++]) {
            instance.setVal(instance.elem('control').val());
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
