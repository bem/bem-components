modules.require(['i-bem__dom'], function(BEMDOM) {
/**
 * Болванка для контрола формы с заданным типом (модификатор _type)
 * К таким контролам подмешивается BEM-блок, реализующий АПИ соответсвующего контрола
 * В общем случае считается, что имя подмешанного блока совпадает со значением модификатора _type
 */
BEMDOM.decl({

    block : 'form',
    elem : 'control',
    modName : 'type'

}, {

    /**
     * Возвращает закэшированный инстанс подмешанного контрола
     * @returns {BEM}
     */
    getControl : function() {

        return this._control || (this._control = this.findBlockOn(this.getMod('type')));

    },

    getName : function() {

        return this.params.name || this.getControl().getName();

    },

    /**
     * Возвращает значение контрола
     * @returns {String}
     */
    getVal : function() {

        return this.getControl().getVal();

    },

    /**
     * Устанавливает значение контрола
     * @param {*|String} val устанавливаемое значение
     */
    setVal : function(val) {

        this.getControl().setVal(val);

    },

    /**
     * Переводит контрол в активное состояние
     */
    enable : function() {

        this.getControl().delMod('disabled');

    },

    /**
     * Переводит контрол в неактивное состояние
     */
    disable : function() {

        this.getControl().setMod('disabled', true);

    },

    /**
     * Реакция на событие изменения значения контрола
     * Запускает процедуру обновления формы
     */
    onControlChange : function() {

        this.runUpdate();

    },

    /**
     * Реакция на событие получения контролом фокуса
     */
    onControlFocus : function() {},

    /**
     * Реакция на событие потери контролом фокуса
     * Запускает процедуру валидации формы
     */
    onControlBlur : function() {

        this.block().validate();

    }


});

});
