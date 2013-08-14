modules.define('i-bem__dom', ['jquery'], function(provide, $, DOM) {

/**
 * @namespace JS-API блока radio
 * @name block
 */
DOM.decl('radiobox', /** @lends block.prototype */ {
    onSetMod: {
        'js' : {
            'inited' : function() {
                var _this = this;

                _this._val = this.findElem(this.elem('radio', 'checked', 'yes'), 'control').val();

                _this.elem('control').each(function(i, control) {
                    control = $(control);

                    var mods = [];

                    _this._isControlFocused(control) && mods.push('focused');
                    control.prop('checked') && mods.push('checked');

                    if(mods.length) {
                        var radio = _this.__self._getRadioByElem(control);

                        mods.forEach(function(modName) {
                            _this.setMod(radio, modName, 'yes');
                        });
                    }
                });
            }
        },

        'disabled' : function(modName, modVal) {
            this.toggleMod(this.elem('radio'), 'disabled', 'yes', modVal === 'yes');
        }
    },

    onElemSetMod : {
        'radio' : {
            'focused' : {
                'yes' : function(elem) {
                    this.delMod(this.elem('radio', 'focused', 'yes'), 'focused');

                    var control = this.findElem(elem, 'control');

                    this._isControlFocused(control) || control.focus();

                    this.nextTick(function() {
                        this.trigger('focus', { current: elem });
                    });
                },

                '' : function(elem) {
                    this.nextTick(function() {
                        this.trigger('blur', { prev: elem });
                    });
                }
            },

            'checked' : {
                'yes' : function(elem) {
                    this._val = this
                        .findElem(elem, 'control')
                        .prop('checked', true)
                        .val();

                    var prev = this.elem('radio', 'checked', 'yes');
                    this
                        .delMod(prev, 'checked')
                        .trigger('change', { current: elem, prev: prev });
                }
            },

            'hovered' : function(elem) {
                return !this.isDisabled(elem);
            },

            'disabled' : function(elem, modName, modVal) {
                this.findElem(elem, 'control').prop('disabled', modVal === 'yes');
            }

        }

    },

    /**
     * Проверяет в фокусе ли контрол
     * @private
     * @param {jQuery} control
     * @returns {Boolean}
     */
    _isControlFocused : function(control) {
        try {
            return control[0] === DOM.doc[0].activeElement;
        } catch(e) {
            return false;
        }
    },

    /**
     * Шорткат для проверки модификатора `_disabled_yes`
     *
     * @param {jQuery} [radio] кнопка, состояние которой необнодимо проверить (если не указан, то проверяется сам блок)
     * @returns {Boolean}
     */
    isDisabled : function(radio) {
        return this.hasMod(radio, 'disabled', 'yes');
    },

    /**
     * Метод можно вызывать с параметром и без.
     * Вызвав без парамерта получаем значение аттрибута value элемента radio, соответствующего активной кнопке.
     * Вызвав с парамертом, в котором передаем значение аттрибута value произвольного элемента radio,
     * делаем активной кнопку, соответствующую этому элементу radio.
     *
     * @param {String} [val] Значение аттрибута value какого-либо элемента radio данного блока.
     * @returns {String|BEM.DOM} Аттрибут value активного элемента radio, либо объект блока
     */
    val : function(val) {
        if(!arguments.length) return this._val;

        var _this = this;
        this.elem('control').each(function(i, control) {
            if(control.value == val) {
                _this.setMod(_this.__self._getRadioByElem($(control)), 'checked', 'yes');
                return false;
            }
        });

        return _this;
    },

    /**
     * Метод позволяет получить активный элемент radio блока.
     * @returns {jQuery} DOM elements
     */
    getCurrent: function() {
        return this.findElem('radio', 'checked', 'yes');
    },

    /**
     * Метод позволяет перевести все кнопки блока в ненажатое состояние.
     * @returns {BEM.DOM} Объект блока
     */
    uncheckAll : function() {
        var prevRadio = this.elem('radio', 'checked', 'yes');

        this
            .delMod(prevRadio, 'checked')
            .findElem(prevRadio, 'control').prop('checked', false);

        this._val = undefined;

        return this.trigger('change', { prev: prevRadio });
    },

    /**
     * Обработчик клика левой кнопки мыши по radio
     * @private
     * @param {jQuery.Event} e
     */
    _onPointerClick : function(e) {
        this.isDisabled(e.domElem) || this.setMod(e.domElem, 'focused', 'yes');
    },

    /**
     * Обработчик изменения значения контрола
     * @private
     * @param {jQuery.Event} e
     */
    _onChange : function(e) {
        // Событие change тригерится только при свойстве checked === true
        this.setMod(this.__self._getRadioByElem(e.domElem), 'checked', 'yes');
    }
}, /** @lends block */ {
    live : function() {
        this
            .liveBindTo('radio', 'pointerclick', function(e) { this._onPointerClick(e) })
            .liveBindTo('control', 'change', function(e) { this._onChange(e) })
            .liveBindTo('radio', 'mouseover mouseout', function(e) {
                this.toggleMod(e.domElem, 'hovered', 'yes', e.type === 'mouseover');
            })
            .liveBindTo('control', 'focusin focusout', function(e) {
                this.toggleMod(
                    this.__self._getRadioByElem(e.domElem),
                    'focused',
                     'yes',
                     e.type === 'focusin');
            });

        return false;
    },

    /**
     * Позволяет получить элемент radio (radiobox__radio) по какому-либо потомку этого элемента в DOM-дереве.
     */
    _getRadioByElem : function(elem) {
        return elem.closest(this.buildSelector('radio'));
    }
});

provide(DOM);

});
