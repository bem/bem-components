/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('input', /** @lends Block.prototype */ {

    onSetMod : {

        'js' : function() {

            this.__base.apply(this, arguments);

            var _this = this;

            if(_this.elem('clear') && !_this.hasMod('clear', 'visibility', 'visible')) {
                _this.bindTo('box', 'click', function(e) {
                    _this.setMod('focused', 'yes');
                });
            }

            _this.bindInput();
        }
    },

    onElemSetMod : {

        'clear' : {

            'visibility' : {

                'visible' : function() {
                    this.unbindFrom('box', 'click');
                },

                '' : function() {
                    var _this = this;
                    this.bindTo('box', 'click', function(e) {
                        _this.setMod('focused', 'yes');
                    });
                }
            }

        }
    },

    bindInput : function() {

        var _this = this;

        _this.bindTo('input', function() {
            _this.val(_this.elem('control').val());
            _this._updateClear();
        });

        _this
            .on('change', _this._updateClear)
            ._updateClear();

    },

    /**
     * Обработчик нажатия на кнопку очистки инпута
     * Очищает значение в поле ввода
     * @private
     * @return {Object} экземпляр блока input
     */
    _onClearClick : function() {

        this.trigger('clear');
        this.removeInsets && this.removeInsets();

        return this
            .clearInput({ source: 'clear' })
            .setMod('focused', 'yes');

    },

    clearInput : function(data) {

        this.elem('control').val('');
        this._val = '';
        this.trigger('change', data);

        return this;

    },

    /**
     * Переключает значение модификатора visibility для элемента clear
     * в зависимости от наличия значения в поле ввода
     * @private
     * @return {Object} экземпляр блока input
     */
    _updateClear : function() {

        return this.toggleMod(this.elem('clear'), 'visibility', 'visible', '', !!this._val);

    },


}, {

    live : function() {

        this.__base.apply(this, arguments);

        this.liveBindTo('clear', 'leftclick', function(e) {
            this._onClearClick();
        });

        return false;

    }
});