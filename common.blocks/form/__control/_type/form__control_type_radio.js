modules.define('form', ['i-bem__dom'], function(provide, BEMDOM) {
/**
 * Контрол типа radio (радиогруппа)
 * Подмешивается к блоку radio
 */
provide(BEMDOM.decl({

    block : 'form',
    elem : 'control',
    modName : 'type',
    modVal : 'radio'

}, {}, {

    live : function() {
        this.__base();
        this
            .liveInitOnBlockEvent('change', 'radio', function(e, data) {
                switch(e.type) {
                    case 'change': this.onControlChange(e, data); break;
                }
            })
            .liveInitOnBlockEvent('focus blur', 'radio-option', function(e, data) {
                switch(e.type) {
                    case 'focus': this.onControlFocus(e, data); break;
                    case 'blur': this.onControlBlur(e, data); break;
                }
            });
    }

}));

});
