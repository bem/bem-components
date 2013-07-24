modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('input', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this
                    .on('change', this._updateClear)
                    ._updateClear();
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
            .val('', { source : 'clear' })
            .setMod('focused', 'yes');
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
}, {
    live : function() {
        this.liveBindTo('clear', 'pointerclick', function() {
            this._onClearClick();
        });
    }
});

provide(DOM);

});
