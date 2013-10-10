/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('input', /** @lends Block.prototype */ {

    onSetMod : {

        'js' : function() {
            this.__base.apply(this, arguments);

            this
                .on('change', this._updateClear)
                ._updateClear(); // на случай автокомплита
        }
    },

    /**
     * Обработчик клика по элементу box
     * Переводит фокус на контрол при клике на место очищаего крестика, когда его не видно
     * @private
     */
    _onBoxClear: function() {
        this.hasMod('clear', 'visibility', 'visible') || this.setMod('focused', 'yes');
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
        this.val('', data);

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
    }

}, {

    live : function() {
        this.__base.apply(this, arguments);

        this
            .liveBindTo('clear', 'leftclick', function(e) {
                this._onClearClick();
            })
            .liveBindTo('box', 'click', function(e) {
                this._onBoxClear(e);
            });

        return false;
    }
});
