/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('input', /** @lends Block.prototype */ {

    onSetMod : {

        'js' : function() {

            this.__base.apply(this, arguments);

            var _this = this;

            _this
                .on('change', _this._updateClear)
                ._updateClear();

            if(_this.elem('clear') && !_this.hasMod('clear', 'visibility', 'visible')) {
                _this.bindTo('box', 'click', function(e) {
                    _this.setMod('focused', 'yes');
                });
            }
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
            .val('', { source: 'clear' })
            .setMod('focused', 'yes');

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