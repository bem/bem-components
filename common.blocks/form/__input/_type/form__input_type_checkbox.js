modules.require(['i-bem__dom'], function(BEMDOM) {
/**
 * Инпут типа checkbox
 * Подмешивается к блоку checkbox
 */
BEMDOM.decl({

    block : 'form',
    elem : 'input',
    modName : 'type',
    modVal : 'checkbox'

}, {

    setVal : function(val) {

        this.toggleMod('checked', 'yes', '', !!val);

    }

}, {

    live : function() {

        this.__base();
        this.liveInitOnBlockEvent('change focus blur', 'checkbox', function(e, data) {
            switch(e.type) {
                case 'change': this.onInputChange(e, data); break;
                case 'focus': this.onInputFocus(e, data); break;
                case 'blur': this.onInputBlur(e, data); break;
            }
        });

    }

});

});
