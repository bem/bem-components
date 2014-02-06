modules.require(['i-bem__dom'], function(BEMDOM) {
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

    setVal : function(val) {

        this.getControl().toggleMod('checked', 'yes', '', !!val);

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

});
