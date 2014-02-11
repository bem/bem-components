modules.define('i-bem__dom', function(provide, BEMDOM) {
/**
 * Контрол типа checkbox (флажок)
 * Подмешивается к блоку checkbox
 */
BEMDOM.decl({

    block : 'form',
    elem : 'control',
    modName : 'type',
    modVal : 'checkbox'

}, {

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

        this.__base();
        this.liveInitOnBlockEvent('change focus blur', 'checkbox', function(e, data) {
            switch(e.type) {
                case 'change': this.onControlChange(e, data); break;
                case 'focus': this.onControlFocus(e, data); break;
                case 'blur': this.onControlBlur(e, data); break;
            }
        });

    }

});

provide(BEMDOM);

});
