modules.define('form', function(provide, Form) {
/**
 * Болванка для контрола формы с заданным типом (модификатор _type)
 * К таким контролам подмешивается BEM-блок, реализующий АПИ соответсвующего контрола
 * В общем случае считается, что имя подмешанного блока совпадает со значением модификатора _type
 */
provide(Form.decl({ block : this.name, elem : 'control', modName : 'type' }, {
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
        return this.getControl().getName();
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
     * @protected
     */
    _onControlChange : function(e, data) {
        this.block()._onControlChange(this, e, data);
    },

    /**
     * Реакция на событие получения контролом фокуса
     * @abstract
     * @protected
     */
    _onControlFocus : function() {},

    /**
     * Реакция на событие потери контролом фокуса
     * @abstract
     * @protected
     */
    _onControlBlur : function() {}
}));

});
