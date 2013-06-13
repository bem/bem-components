modules.define('i-bem__dom', ['next-tick'], function(provide, nextTick, DOM) {

/**
 * @namespace
 * @name Button
 */
DOM.decl('button', /** @lends Button.prototype */ {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var disabled = this.isDisabled(),
                    domElem = this.domElem;

                (this._href = domElem.attr('href')) && disabled &&
                    domElem.removeAttr('href');

                domElem.attr('disabled', disabled);

                this._isFocusable = 'a button'.indexOf(domElem[0].tagName.toLowerCase()) > -1;
            },

            '' : function() {
                this.delMod('focused');
            }
        },

        'focused' : {
            'yes' : function() {
                if(this.isDisabled()) return false;

                this
                    .bindToWin('unload', function() { this.delMod('focused') })
                    .bindTo('keydown', this._onKeyDown);

                this._isFocusable && (this._isControlFocused() || this.domElem.focus());

                // TODO: заменить на `this.nextTick` после https://github.com/bem/bem-core/issues/71
                nextTick(function() { this.trigger('focus') }.bind(this)); // TODO: убрать bind после https://github.com/bem/bem-core/issues/70
            },

            '' : function() {
                this
                    .unbindFromWin('unload')
                    .unbindFrom('keydown');

                this._isFocusable && this._isControlFocused() && this.domElem.blur();

                // TODO: заменить на `this.nextTick` после https://github.com/bem/bem-core/issues/71
                nextTick(function() { this.trigger('blur') }.bind(this)); // TODO: убрать bind после https://github.com/bem/bem-core/issues/70
            }
        },

        'disabled' : function(modName, modVal) {
            var disable = modVal == 'yes',
                domElem = this.domElem;

            this._href && (disable?
                domElem.removeAttr('href') :
                domElem.attr('href', this._href));

            // TODO: нужно более явно отжимать кнопку,
            // а не создавать фейковое событие keyup,
            // которое кто-то может слушать и использовать
            disable && domElem.keyup();

            domElem.attr('disabled', disable);
        },

        'pressed' : function(modName, modVal) {
            this.setMod('focused', 'yes');
            this.isDisabled() || this.trigger(modVal == 'yes' ? 'press' : 'release');
        },

        'hovered' : {
            '' : function() {
                this.delMod('pressed');
            }
        },

        '*' : function(modName) {
            if(this.isDisabled() && 'hovered pressed'.indexOf(modName) > -1)
                return false;
        }
    },

    /**
     * Шорткат для проверки модификатора disabled_yes
     * @returns {Boolean}
     */
    isDisabled : function() {
        return this.hasMod('disabled', 'yes');
    },

    /**
     * Получение/установка урла (для кнопки-ссылки)
     * @param {String} [val] урл
     */
    url : function(val) {
        if(arguments.length) {
            this._href = val;
            this.isDisabled() || this.domElem.attr('href', val);
            return this;
        } else {
            return this._href;
        }
    },

    /**
     * Проверяет в фокусе ли контрол
     * @private
     * @returns {Boolean}
     */
    _isControlFocused : function() {
        try {
            return this.containsDomElem(DOM.doc.activeElement);
        } catch(e) {
            return false;
        }
    },

    _onKeyDown : function(e) {
        var keyCode = e.keyCode;
        // имитируем state_pressed по нажатию на enter и space
        if((keyCode == 13 || keyCode == 32) && !this._keyDowned) {
            this._keyDowned = true;
            this
                .setMod('pressed', 'yes')
                .bindTo('keyup', function() {
                    this
                        .delMod('pressed')
                        .unbindFrom('keyup');

                    delete this._keyDowned;

                    // делаем переход по ссылке по space
                    keyCode == 32 && this.domElem.attr('href') &&
                        (document.location = this.domElem.attr('href'));
                });
        }
    },

    _onClick : function(e) {
        this.isDisabled()?
            e.preventDefault() :
            // TODO: заменить на `this.nextTick` после https://github.com/bem/bem-core/issues/71
            nextTick(function() { this.trigger('click') }.bind(this)); // TODO: убрать bind после https://github.com/bem/bem-core/issues/70
    }
}, /** @lends Button */ {
    live : function() {
        var eventsToMods = {
            'mouseover' : { name : 'hovered', val : 'yes' },
            'mouseout' : { name : 'hovered' },
            'mousedown' : { name : 'pressed', val : 'yes' },
            'mouseup' : { name : 'pressed' },
            'focusin' : { name : 'focused', val : 'yes' },
            'focusout' : { name : 'focused' }
        };

        this
            .liveBindTo('leftclick', function(e) { this._onClick(e) })
            .liveBindTo('mouseover mouseout mouseup focusin focusout', function(e) {
                var mod = eventsToMods[e.type];
                this.setMod(mod.name, mod.val || '');
            })
            .liveBindTo('mousedown', function(e) {
                var mod = eventsToMods[e.type];
                e.which == 1 && this.setMod(mod.name, mod.val || '');

                // отменяем blur после mousedown, если кнопка в фокусе
                this._isControlFocused() && e.preventDefault();
            });
    }
});

provide(DOM);

});
