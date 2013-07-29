(function() {

var instances = [],
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

        js : {

            'inited': function() {

                this.__base.apply(this, arguments);

                var _this = this,
                    input = _this.elem('control'),
                    activeElement = getActiveElement(_this.__self.doc[0]),
                    haveToSetAutoFocus =
                        _this.params.autoFocus &&
                            !(activeElement && $(activeElement).is('input, textarea'));

                if (activeElement === input[0] || haveToSetAutoFocus) {
                    _this.setMod('focused', 'yes')._focused = true;
                }

                // факт подписки
                if(!sysChannel) {
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

            }
        }
    },

    bindFocus : function() {

        // сохраняем индекс в массиве инстансов чтобы потом быстро из него удалять
        this._instanceIndex = instances.push(
            this.__base.apply(this, arguments);
        ) - 1;

    },

    bindInput : function() {

        var _this = this;

        _this
            .on('change', _this._updateClear)
            ._updateClear();

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
