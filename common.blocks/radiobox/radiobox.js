(function(BEM, undefined) {

/**
 * @namespace JS-API блока radio
 * @name block
 */
BEM.DOM.decl('radiobox', /** @lends block.prototype */ {

    onSetMod: {

        'js' : function() {

            var _this = this;

            _this._val = this.findElem(this.elem('radio', 'checked', 'yes'), 'control').val();

            _this.elem('control').each(function(i, control) {
                var mods = [];

                _this._isControlFocused($(control)) && mods.push('focused');
                control.checked && mods.push('checked');

                if(mods[0]) {
                    var radio = _this.__self._getRadioByElem($(control));

                    mods.forEach(function(modName) {
                        _this.setMod(radio, modName, 'yes');
                    });
                }
            });

        },

        'disabled' : {

            'yes' : function() {
                this.setMod(this.elem('radio'), 'disabled', 'yes');
            },

            '' : function() {
                this.delMod(this.elem('radio'), 'disabled');
            }

        }

    },

    onElemSetMod : {

        'radio' : {

            'focused' : {

                'yes' : function(elem) {
                    this.delMod(this.elem('radio', 'focused', 'yes'), 'focused');

                    var control = this.findElem(elem, 'control');

                    this._isControlFocused(control) || control.focus();

                    this.afterCurrentEvent(function() {
                        this.trigger('focus', { current: elem });
                    });
                },

                '' : function(elem) {
                    this.afterCurrentEvent(function() {
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
                    this.delMod(prev, 'checked');

                    this.trigger('change', {
                        current: elem,
                        prev: prev
                    });
                }

            },

            'hovered' : function(elem) {

                return !this.isDisabled(elem);

            },

            'disabled' : function(elem, modName, modVal) {

                elem.find(this.buildSelector('control')).prop('disabled', modVal == 'yes');

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
            return control[0] === this.__self.doc[0].activeElement;
        } catch(e) {
            return false;
        }

    },

    /**
     * Шорткат для проверки модификатора `_disabled_yes`
     *
     * @param {jQuery} radio кнопка, состояние которой необнодимо проверить
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

        if(typeof val == 'undefined') {
            return this._val;
        }

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

        this.trigger('change', {
            current: undefined,
            prev: prevRadio
        });

        return this;

    },

    /**
     * Обработчик клика левой кнопки мыши по radio
     * @private
     * @param {jQuery.Event} e
     */
    _onLeftClick : function(e) {

        this.isDisabled(e.data.domElem) || this.setMod(e.data.domElem, 'focused', 'yes');

    },

    /**
     * Обработчик изменения значения контрола
     * @private
     * @param {jQuery.Event} e
     */
    _onChange : function(e) {

        // Событие change тригерится только при свойстве checked === true
        this.setMod(this.__self._getRadioByElem(e.data.domElem), 'checked', 'yes');

    }

}, /** @lends block */ {

    live : function() {

        this
            .liveBindTo('radio', 'leftclick', function(e) {
                this._onLeftClick(e);
            })
            .liveBindTo('control', 'change', function(e) {
                this._onChange(e);
            })
            .liveBindTo('radio', 'mouseover mouseout', function(e) {
                this.setMod(e.data.domElem, 'hovered', e.type == 'mouseover'? 'yes' : '');
            })
            .liveBindTo('control', 'focusin focusout', function(e) {
                this.setMod(
                    this.__self._getRadioByElem(e.data.domElem),
                    'focused',
                    e.type == 'focusin'? 'yes' : '');
            });

        return false;
    },

    /**
     * Позволяет получить элемент radio (radiobox__radio) по какому-либо потомку этого элемента в DOM-дереве.
     */
    _getRadioByElem : function(elem) {
        // метод вынесен в статические методы класса, так как он никак не зависит от инстансов

        return elem.closest(this.buildSelector('radio'));

    }

});


})(BEM);
