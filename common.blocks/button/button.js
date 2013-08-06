modules.define('i-bem__dom', ['jquery', 'dom'], function(provide, $, dom, BEMDOM) {

BEMDOM.decl('button', {
    beforeSetMod : function(modName, modVal) {
        if(this.isDisabled() && modVal && (modName === 'focused' || modName === 'pressed'))
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

                dom.containsFocus(this.domElem) && this.domElem.blur();

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
        }
    },

    /**
     * Returns whether the control is disabled
     * @returns {Boolean}
     */
    isDisabled : function() {
        return this.hasMod('disabled');
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

    _onUnload : function() {
        this.delMod('focused');
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
        this
            .liveBindTo('pointerclick', function(e) {
                this._onClick(e);
            })
            .liveBindTo('focusin focusout', function(e) {
                this.setMod('focused', e.type === 'focusin');
            })
            .liveBindTo('mouseup', function() {
                this.delMod('pressed');
            })
            .liveBindTo('mousedown', function(e) {
                e.which === 1 && this.setMod('pressed', true);
            });
    }
});

provide(BEMDOM);

});
