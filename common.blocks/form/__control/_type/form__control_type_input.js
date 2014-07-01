modules.define('form', function(provide, Form) {
/**
 * Контрол типа input (текстовое поле ввода)
 * Подмешивается к блоку input
 */
provide(Form.decl({ block : 'form', elem : 'control', modName : 'type', modVal : 'input' }, {}, {
    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockEvent('change', 'input', ptp._onControlChange)
            .liveInitOnBlockEvent('focus', 'input', ptp._onControlFocus)
            .liveInitOnBlockEvent('blur', 'input', ptp._onControlBlur);
    }
}));

});
