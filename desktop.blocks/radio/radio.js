(function(BEM, undefined) {

/**
 * @namespace JS-API блока radio
 * @name block
 */
BEM.DOM.decl('radio', /** @lends block.prototype */ {

    onSetMod: {

        'js' : function() {

            var _this = this;

            try {
                // В iframe в IE9 происходит "Error: Unspecified error."
                var activeNode = _this.__self.doc[0].activeElement;
            } catch(e) {}

            _this._val = this.findElem(this.elem('button', 'checked', 'yes'), 'control').val();

            _this.elem('control').each(function() {
                var mods = [];

                activeNode === this && (mods.push('focused'));
                this.checked && (mods.push('checked'));

                if(mods[0]) {
                    var button = _this.__self._getButtonByElem($(this));
                    $.each(mods, function(i, modName) {
                        _this.setMod(button, modName, 'yes');
                    });
                }
            });

        }

    },

    onElemSetMod : {

        'button' : {

            'focused' : {

                'yes' : function(elem) {
                    this
                        .delMod(this.elem('button', 'focused', 'yes'), 'focused')
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

                    var prev = this.elem('button', 'checked', 'yes');
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
                    this.delMod(this.elem('button', 'next-for-pressed', 'yes'), 'next-for-pressed');
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
                        .delMod(this.elem('button'), 'pressed')
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
     * @param {jQuery} button кнопка, состояние которой необнодимо проверить
     * @returns {Boolean}
     */
    isDisabled : function(button) {

        return this.hasMod(button, 'disabled', 'yes');

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
                    _this.setMod(_this.__self._getButtonByElem($(this)), 'checked', 'yes');
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

        var button = this.elem('button', 'checked', 'yes');

        this
            .delMod(button, 'checked')
            .findElem(button, 'control').attr('checked', false);

        this._val = undefined;

        return this;

    },

    _onChange : function(e) {

        var button = this.__self._getButtonByElem(e.data.domElem);

        e.target.checked?
            this.setMod(button, 'checked', 'yes') :
            this.delMod(button, 'checked');

    },

    _onMouseDown : function(e) {

        var button = this.__self._getButtonByElem(e.data.domElem);

        if(this.isDisabled(button) || this.hasMod(button, 'checked', 'yes'))
            return;

        this.setMod(button, 'pressed', 'yes');

        this.bindToDoc('mouseup', function(e) {
            this.afterCurrentEvent(function() {

                if(!this.findElem(button, 'control').attr('checked')) {
                    this
                        .delMod(button, 'pressed')
                        .setMod(this.elem('button', 'checked', 'yes'), 'pressed', 'yes');
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
                    var button = this.__self._getButtonByElem(e.data.domElem);
                    this
                        .setMod(button, 'focused', 'yes')
                        .setMod(button, 'checked', 'yes');
                }
            })
            .liveBindTo('control', 'change', function(e) {
                this._onChange(e);
            })
            .liveBindTo('button', 'mouseover mouseout', function(e) {
                this.setMod(
                    this.__self._getButtonByElem(e.data.domElem),
                    'hovered',
                    e.type == 'mouseover'? 'yes' : '');
            })
            .liveBindTo('button', 'mousedown', function(e) {
                this._onMouseDown(e);
            })
            .liveBindTo('control', 'focusin focusout', function(e) {
                this.setMod(
                    this.__self._getButtonByElem(e.data.domElem),
                    'focused',
                    e.type == 'focusin'? 'yes' : '');
            });

        return false;
    },

    /**
     * Позволяет получить элемент button (radio__button) по какому-либо потомку этого элемента в DOM-дереве.
     *
     * @example
     * var block = this,
     *     descendant_of_some_button = block.elem('radio')[3],
     *     button = block.__self._getButtonByElem($(radio));
     *
     * @param {jQuery} elem Элемент, являющийся потомком элемента button.
     * @returns {jQuery} Ближайший предок elem, являющийся элементом button, либо сам элемент elem, если он является элементом button
     */
    _getButtonByElem : function(elem) {

        return elem.closest(this.buildSelector('button'));

    }

});


})(BEM);
