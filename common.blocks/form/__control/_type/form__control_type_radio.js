modules.require(['i-bem__dom'], function(BEMDOM) {
    /**
     * Контрол типа radio (радиогруппа)
     * Подмешивается к блоку radio
     */
    BEMDOM.decl({

        block : 'form',
        elem : 'control',
        modName : 'type',
        modVal : 'radio'

    }, {}, {

        live : function() {

            this.__base();
            this.liveInitOnBlockEvent('change', 'radio', function(e, data) {
                switch(e.type) {
                    case 'change': this.onControlChange(e, data); break;
                }
            });

        }

    });

});
