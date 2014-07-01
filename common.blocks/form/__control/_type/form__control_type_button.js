modules.define('form', function(provide, Form) {
/**
 * Контрол типа button (кнопка)
 * Подмешивается к блоку button
 */
provide(Form.decl({ block : this.name, elem : 'control', modName : 'type', modVal : 'button' }, {
    /**
     * Заглушка
     */
    getName : function() {},

    /**
     * Заглушка
     */
    getVal : function() {},

    /**
     * Заглушка
     */
    setVal : function() {}
}));

});
