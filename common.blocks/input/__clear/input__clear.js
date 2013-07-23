modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('input', /** @lends Block.prototype */ {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this
                    .on('change', this._updateClear)
                    ._updateClear();

                this.elem('clear') && !this.hasMod('clear', 'visibility', 'visible') && // TODO: это точно все нужно в common? (на тачах не нужно)
                    this.bindTo('box', 'click', function() {
                        this.setMod('focused', 'yes');
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
                    this.bindTo('box', 'click', function() {
                        this.setMod('focused', 'yes');
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
        return this
            .val('', { source: 'clear' })
            .setMod('focused', 'yes')
            .trigger('clear'); // TODO: кому нужно именно такое событие? почему недостаточно слушать change?
    },

    /**
     * Переключает значение модификатора visibility для элемента clear
     * в зависимости от наличия значения в поле ввода
     * @private
     * @return {Object} экземпляр блока input
     */
    _updateClear : function() {
        return this.toggleMod(this.elem('clear'), 'visibility', 'visible', !!this._val);
    }
});

provide(DOM);

});
