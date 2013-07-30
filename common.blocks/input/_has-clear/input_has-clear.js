modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl({ block: 'input', modName: 'has-clear', modVal: true }, {
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
        return this.toggleMod(this.elem('clear'), 'visible', true, !!this._val);
    }
}, {
    live : function() {
        this.liveBindTo('clear', 'pointerclick', function() {
            this._onClearClick();
        });

        return this.__base.apply(this, arguments);
    }
});

provide(DOM);

});
