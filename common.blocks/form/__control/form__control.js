modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {
/**
 * Контрол (поле ввода) формы
 */
BEMDOM.decl({

    block : 'form',
    elem : 'control'

}, {

    onSetMod : {

        'disabled' : function(modName, modVal) {
            modVal?
                this.getControl().attr('disabled', 'disabled') :
                this.getControl().removeAttr('disabled');
        }

    },

    /**
     * Возвращает jQuery-инстанс контрола
     * @returns {BEM}
     */
    getControl : function() {
        return this.domElem;
    },

    /**
     * Возвращает имя контрола
     * В качестве имени берется js-параметр name, если указан, или HTML-атрибут name DOM-ноды, соответствующей контролу
     * @returns {String}
     */
    getName : function() {
        return this.params.name || this.domElem.attr('name');
    },

    /**
     * Возвращает значение контрола
     * @returns {String}
     */
    getVal : function() {
        return this.getControl().val();
    },

    /**
     * Устанавливает значение контрола
     * @param {*} val устанавливаемое значение
     */
    setVal : function(val) {
        this.getControl().val(val);
    },

    /**
     * Устанавливает значение контрола из переданных данных в соответствии с его именем
     * @param {Object} data данные для заполнения формы
     */
    fill : function(data) {
        var name = this.getName();

        if(name) {
            var value = data[name];
            value ? this.setVal(value) : this.clear();
        }
    }

}, {

    live : true

});

provide(BEMDOM);

});
