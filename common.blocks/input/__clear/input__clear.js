/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('input', /** @lends Block.prototype */ {

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

    }

});