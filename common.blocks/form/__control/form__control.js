modules.define('form', function(provide, Form) {
/**
 * Контрол (поле ввода) формы
 */
provide(Form.decl({ block : this.name, elem : 'control' }, {}, { live : true }));

});
