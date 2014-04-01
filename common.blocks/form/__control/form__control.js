modules.define('form', function(provide, BEMDOM) {
/**
 * Контрол (поле ввода) формы
 */
provide(BEMDOM.decl({ block : this.name, elem : 'control' }, {}, { live : true }));

});
