modules.require(['i-bem__dom'], function(BEMDOM) {
/**
 * Болванка для инпута (поля ввода) формы с заданным типом (модификатор _type)
 * К таким инпутам подмешивается BEM-блок, реализующий АПИ соответсвующего контрола
 * В общем случае считается, что имя подмешанного блока совпадает со значением модификатора _type
 */
BEMDOM.decl({

    block : 'form',
    elem : 'input',
    modName : 'type'

}, {

    /**
     * Устанавливает значение инпута
     * @param {*|String} val устанавливаемое значение
     */
    setVal : function(val) {

        this.getInput().setVal(val);

    },

    /**
     * Возвращает значение инпута
     * @returns {String}
     */
    getVal : function() {

        return this.getInput().getVal();

    },

    getName : function() {

        return this.params.name || this.getInput().getName();

    },

    /**
     * Возвращает закэшированный инстанс подмешанного инпута
     * @returns {BEM}
     */
    getInput : function() {

        return this._input || (this._input = this.findBlockOn(this.getMod('type')));

    },

    /**
     * Хелпер для перевода инпута в активное/неактивное состояние
     * @param {Boolean} isDisabled состояние, в которое нужно перевести инпут
     * @private
     */
    _toggleDisabledState : function(isDisabled) {

        var input = this.getInput();

        input.toggleMod('disabled', 'yes', '', isDisabled);

    },

    /**
     * Реакция на событие изменения значения инпута
     * Запускает процедуру обновления формы
     */
    onInputChange : function() {

        this.runUpdate();

    },

    /**
     * Реакция на событие получения инпутом фокуса
     */
    onInputFocus : function() {},

    /**
     * Реакция на событие потери инпутом фокуса
     * Запускает процедуру валидации формы
     */
    onInputBlur : function() {

        this.block().validate();

    }


});

});
