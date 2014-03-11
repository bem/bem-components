modules.define('i-bem__dom', function(provide, BEMDOM) {
    /**
     * Контрол типа button (кнопка)
     * Подмешивается к блоку button
     */
    BEMDOM.decl({

        block : 'form',
        elem : 'control',
        modName : 'type',
        modVal : 'button'

    }, {

        /**
         * Заглушка
         */
        getVal : function() {},

        /**
         * Заглушка
         */
        setVal : function() {}

    });

    provide(BEMDOM);

});
