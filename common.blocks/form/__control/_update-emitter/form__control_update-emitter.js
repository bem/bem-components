modules.define('i-bem__dom', function(provide, BEMDOM) {
/**
 * При наличии этого модификатора элемент запускает процедуру обновления формы
 *  при каждом изменении подмешанного контрола
 */
BEMDOM.decl({

    block : 'form',
    elem : 'control',
    modName : 'update-emitter'

}, {

    /**
     * Реакция на событие изменения значения контрола
     * Запускает процедуру обновления формы
     */
    onControlChange : function() {

        this.runUpdate();

    }

});

provide(BEMDOM);

});
