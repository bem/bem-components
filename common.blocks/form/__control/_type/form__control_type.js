modules.define('form', ['i-bem__dom'], function(provide, BEMDOM) {
/**
 * Болванка для контрола формы с заданным типом (модификатор _type)
 * К таким контролам подмешивается BEM-блок, реализующий АПИ соответсвующего контрола
 * В общем случае считается, что имя подмешанного блока совпадает со значением модификатора _type
 */
provide(BEMDOM.decl({

    block : 'form',
    elem : 'control',
    modName : 'type'

}, {

    onSetMod : {

        'disabled' : function(modName, modVal) {
            this.getControl().setMod(modName, modVal);
        }

    },

    /**
     * Возвращает закэшированный инстанс подмешанного контрола
     * @returns {BEM}
     */
    getControl : function() {
        return this._control || (this._control = this.findBlockOn(this.getMod('type')));
    },

    /**
     * Возвращает имя контрола
     * @returns {String}
     */
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
     * Реакция на событие изменения значения контрола
     */
    onControlChange : function() {
        this.block().onControlChange();
    },

    /**
     * Реакция на событие получения контролом фокуса
     */
    onControlFocus : function() {},

    /**
     * Реакция на событие потери контролом фокуса
     */
    onControlBlur : function() {}

}));

});
