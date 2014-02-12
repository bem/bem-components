modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {
/**
 * Контрол (поле ввода) формы
 */
BEMDOM.decl({

    block : 'form',
    elem : 'control'

}, {

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
     * Очищает контрол
     */
    clear : function() {

        this.setVal('');

    },

    /**
     * Запускает процедуру обновления формы при изменении одного из контролов
     * @param {Object} data дополнительные данные изменившегося контрола
     */
    runUpdate : function(data) {

        var block = this.block(),
            updateData = { control : this };

        if(data) updateData = $.extend(updateData, data);

        block.update(updateData);
        block.hasMod('locked') || this.emit('update', updateData);

    },

    /**
     * Заглушка для метода обновления контрола
     * Вызывается только у контролов с модификатором _updatable
     * Доопределяется по необходимости с помощью модификатора _name
     */
    update : function() {},

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

    },

    /**
     * Переводит контрол в активное состояние
     */
    enable : function() {

        this.getControl().removeAttr('disabled');

    },

    /**
     * Переводит контрол в неактивное состояние
     */
    disable : function() {

        this.getControl().attr('disabled', 'disabled');

    }

}, {

    live : true

});

provide(BEMDOM);

});
