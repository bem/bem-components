(function(BEM, undefined) {

/**
 * @namespace JS-API блока radio-button
 * @name block
 */
BEM.DOM.decl('radio-button', /** @lends block.prototype */ {

    onSetMod: {

        'js' : function() {

            var _this = this;

            try {
                // В iframe в IE9 происходит "Error: Unspecified error."
                var activeNode = _this.__self.doc[0].activeElement;
            } catch(e) {}

            _this._val = this.findElem(this.elem('radio', 'checked', 'yes'), 'control').val();

            _this.elem('control').each(function() {
                var mods = [];

                activeNode === this && (mods.push('focused'));
                this.checked && (mods.push('checked'));

                if(mods[0]) {
                    var radio = _this.__self._getRadioByElem($(this));
                    $.each(mods, function(i, modName) {
                        _this.setMod(radio, modName, 'yes');
                    });
                }
            });

        }

    },

    onElemSetMod : {

        'radio' : {

            'focused' : {

                'yes' : function(elem) {
                    this
                        .delMod(this.elem('radio', 'focused', 'yes'), 'focused')
                        .findElem(elem, 'control').focus();

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
                        .attr('checked', true)
                        .val();

                    var prev = this.elem('radio', 'checked', 'yes');
                    this
                        .delMod(prev, 'checked')
                        .setMod(elem, 'pressed', 'yes');

                    this.trigger('change', {
                        current: elem,
                        prev: prev
                    });
                },

                '' : function(elem) {
                    this.delMod(elem, 'pressed');
                }

            },

            'next-for-pressed' : {

                'yes' : function() {
                    this.delMod(this.elem('radio', 'next-for-pressed', 'yes'), 'next-for-pressed');
                }

            },

            'hovered' : function(elem) {

                return !this.isDisabled(elem);

            },

            'disabled' : function(elem, modName, modVal) {

                elem.find(this.buildSelector('control')).attr('disabled', modVal == 'yes');

            },

            'pressed' : {

                'yes' : function(elem) {
                    this
                        .delMod(this.elem('radio'), 'pressed')
                        .setMod(elem.next(), 'next-for-pressed', 'yes');
                },

                '' : function(elem) {
                    this.delMod(elem.next(), 'next-for-pressed');
                }

            }

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
        } else {
            var _this = this;
            this.elem('control').each(function() {
                if(this.value == val) {
                    _this.setMod(_this.__self._getRadioByElem($(this)), 'checked', 'yes');
                    return false;
                }
            });
            return _this;
        }

    },

    /**
     * Метод позволяет перевести все кнопки блока в ненажатое состояние.
     * @returns {BEM.DOM} Объект блока
     */
    uncheckAll : function() {

        var radio = this.elem('radio', 'checked', 'yes');

        this
            .delMod(radio, 'checked')
            .findElem(radio, 'control').attr('checked', false);

        this._val = undefined;

        return this;

    },

    _onChange : function(e) {

        var radio = this.__self._getRadioByElem(e.data.domElem);

        e.target.checked?
            this.setMod(radio, 'checked', 'yes') :
            this.delMod(radio, 'checked');

    },

    _onMouseDown : function(e) {

        var radio = this.__self._getRadioByElem(e.data.domElem);

        if(this.isDisabled(radio) || this.hasMod(radio, 'checked', 'yes'))
            return;

        this.setMod(radio, 'pressed', 'yes');

        this.bindToDoc('mouseup', function(e) {
            this.afterCurrentEvent(function() {

                if(!this.findElem(radio, 'control').attr('checked')) {
                    this
                        .delMod(radio, 'pressed')
                        .setMod(this.elem('radio', 'checked', 'yes'), 'pressed', 'yes');
                }

            });

            this.unbindFromDoc('mouseup');
        });

    }

}, /** @lends block */ {

    live : function() {

        this
            .liveBindTo('radio', 'leftclick', function(e) {

                if(!e.target.disabled) {
                    var radio = this.__self._getRadioByElem(e.data.domElem);
                    this
                        .setMod(radio, 'focused', 'yes')
                        .setMod(radio, 'checked', 'yes');
                }
            })
            .liveBindTo('control', 'change', function(e) {
                this._onChange(e);
            })
            .liveBindTo('radio', 'mouseover mouseout', function(e) {
                this.setMod(
                    this.__self._getRadioByElem(e.data.domElem),
                    'hovered',
                    e.type == 'mouseover'? 'yes' : '');
            })
            .liveBindTo('radio', 'mousedown', function(e) {
                this._onMouseDown(e);
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
     * Позволяет получить элемент radio (radio-button__radio) по какому-либо потомку этого элемента в DOM-дереве.
     *
     * @example
     * var block = this,
     *     descendant_of_some_radio = block.elem('radio')[3],
     *     radio = block.__self._getradioByElem($(radio));
     *
     * @param {jQuery} elem Элемент, являющийся потомком элемента radio.
     * @returns {jQuery} Ближайший предок elem, являющийся элементом radio, либо сам элемент elem, если он является элементом radio
     */
    _getRadioByElem : function(elem) {

        return elem.closest(this.buildSelector('radio'));

    }

});


})(BEM);
