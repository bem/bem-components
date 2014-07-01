modules.define('form', function(provide, Form) {
/**
 * Контрол типа checkbox (флажок)
 * Подмешивается к блоку checkbox
 */
provide(Form.decl({ block : this.name, elem : 'control', modName : 'type', modVal : 'checkbox' }, {
    /**
     * Возвращает значение контрола
     * @returns {String}
     */
    getVal : function() {
        var control = this.getControl();
        return control.hasMod('checked') ? control.getVal() : '';
    },

    /**
     * Устанавливает значение контрола
     * @param {String} val значение
     */
    setVal : function(val) {
        this.getControl().setMod('checked', !!val);
    }
}, {
    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockEvent('change', 'checkbox', ptp._onControlChange)
            .liveInitOnBlockEvent('focus', 'checkbox', ptp._onControlFocus)
            .liveInitOnBlockEvent('blur', 'checkbox', ptp._onControlBlur);
    }
}));

});
