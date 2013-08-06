modules.define('i-bem__dom', ['jquery', 'dom'], function(provide, $, dom, BEMDOM) {

BEMDOM.decl('button', {
    beforeSetMod : function(modName, modVal) {
        if(this.isDisabled() && modVal && ~['focused', 'hovered', 'pressed'].indexOf(modName))
            return false;
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                var isDisabled = this.isDisabled(),
                    domElem = this.domElem;

                (this._href = domElem.attr('href')) && isDisabled &&
                    domElem.removeAttr('href');

                domElem.attr('disabled', isDisabled);
            },

            '' : function() {
                this.delMod('focused');
            }
        },

        'focused' : {
            true : function() {
                this
                    .bindToWin('unload', this._onUnload)
                    .bindTo('keydown', this._onKeyDown);

                dom.isFocusable(this.domElem) && (dom.containsFocus(this.domElem) || this.domElem.focus());

                this.trigger('focus');
            },

            '' : function() {
                this
                    .unbindFromWin('unload', this._onUnload)
                    .unbindFrom('keydown', this._onKeyDown);

                dom.isFocusable(this.domElem) && dom.containsFocus(this.domElem) && this.domElem.blur();

                this.trigger('blur');
            }
        },

        'disabled' : {
            '*' : function(_, modVal) {
                this.domElem.attr('disabled', modVal);
            },

            true : function() {
                this._href && this.domElem.removeAttr('href');
                this.delMod('pressed');
            },

            '' : function() {
                this._href && this.domElem.attr('href', this._href);
            }
        },

        'pressed' : function(_, modVal) {
            this.trigger(modVal? 'press' : 'release');
        },

        'hovered' : {
            '' : function() {
                this.delMod('pressed');
            }
        }
    },

    _onUnload : function() {
        this.delMod('focused');
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

    _onKeyDown : function(e) {
        var keyCode = e.keyCode;
        // имитируем pressed по нажатию на enter и space
        if((keyCode == 13 || keyCode == 32) && !this._keyDowned) {
            this._keyDowned = true;
            var onKeyUp = function() {
                this
                    .delMod('pressed')
                    .unbindFrom('keyup', onKeyUp);

                this._keyDowned = false;

                // делаем переход по ссылке по space
                keyCode == 32 && this._href &&
                    (document.location = this._href);
            };
            this
                .setMod('pressed')
                .bindTo('keyup', onKeyUp);
        }
    },

    _onClick : function(e) {
        this.isDisabled()?
            e.preventDefault() :
            this.trigger('click');
    }
}, {
    live : function() {
        var eventsToMods = {
            mouseover : { name : 'hovered', val : true },
            mouseout : { name : 'hovered' },
            mousedown : { name : 'pressed', val : true },
            mouseup : { name : 'pressed' },
            focusin : { name : 'focused', val : true },
            focusout : { name : 'focused' }
        };

        this
            .liveBindTo('pointerclick', function(e) { this._onClick(e) })
            .liveBindTo('mouseover mouseout mouseup focusin focusout', function(e) {
                var mod = eventsToMods[e.type];
                this.setMod(mod.name, mod.val || '');
            })
            .liveBindTo('mousedown', function(e) {
                var mod = eventsToMods[e.type];
                e.which === 1 && this.setMod(mod.name, mod.val);
            });
    }
});

provide(BEMDOM);

});
