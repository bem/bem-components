modules.define('form', function(provide, Form) {
/**
 * Контрол типа radio (радиогруппа)
 * Подмешивается к блоку radio
 */

// TODO Form.decl({ elem: 'control', modName: 'type', modVal: 'radio' }, ...)
provide(Form.decl({ block : 'form', elem : 'control', modName : 'type', modVal : 'radio' }, {}, {
    live : function() {
        var ptp = this.prototype;

        this.__base();
        this
            .liveInitOnBlockEvent('change', 'radio', ptp._onControlChange)
            .liveInitOnBlockEvent('focus', 'radio-option', ptp._onControlFocus)
            .liveInitOnBlockEvent('blur', 'radio-option', ptp._onControlBlur);
    }
}));

});
