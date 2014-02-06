modules.require(['i-bem__dom', 'jquery'], function(BEMDOM, $) {
/**
 * Болванка для инпута (поля ввода) формы
 * Тип инпута задается модификатором _type
 * Все методы следует доопределять с помощью модификаторов _type и _name
 */
BEMDOM.decl({

    block : 'form',
    elem : 'input'

}, {

    /**
     * Возвращает jQuery-инстанс инпута
     * @returns {BEM}
     */
    getInput : function() {

        return this.domElem;

    },

    /**
     * Возвращает имя инпута
     * В качестве имени берется js-параметр name, если указан, или HTML-атрибут name DOM-ноды, соответствующей инпуту
     * @returns {String}
     */
    getName : function() {

        return this.params.name || this.domElem.attr('name');

    },

    /**
     * Возвращает значение инпута
     */
    getVal : function() {

        return this.getInput().val();

    },

    /**
     * Устанавливает значение инпута
     * @param {*} val устанавливаемое значение
     */
    setVal : function(val) {

        this.getInput().val(val);

    },

    /**
     * Очищает инпут
     */
    clear : function() {

        this.setVal('');

    },

    /**
     * Запускает процедуру обновления формы при изменении одного из инпутов
     * @param {Object} data дополнительные данные изменившегося инпута
     */
    runUpdate : function(data) {

        var block = this.block(),
            updateData = { input : this };

        if(data) updateData = $.extend(updateData, data);

        block.update(updateData);
        block.hasMod('locked') || this.emit('update', updateData);

    },

    /**
     * Заглушка для метода обновления инпута
     * Вызывается только у инпутов с модификатором _updatable_yes
     */
    update : function() {},

    /**
     * Устанавливает значение инпута из переданных данных в соответствии с его именем
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
     * Метод для валидации инпута
     * Возвращает массив ключей ошибок валидации
     * По умолчанию любой инпут проходит валидацию без ошибок
     * Доопределяется с помощью модификатора _name
     * @returns {Array}
     */
    validate : function() { return []; },

    /**
     * Переводит инпут в активное состояние
     */
    enable : function() {

        this._toggleDisabledState(false);

    },

    /**
     * Переводит инпут в неактивное состояние
     */
    disable : function() {

        this._toggleDisabledState(true);

    },

    /**
     * Хелпер для перевода инпута в активное/неактивное состояние
     * @param {Boolean} isDisabled состояние, в которое нужно перевести инпут
     * @private
     */
    _toggleDisabledState : function(isDisabled) {

        isDisabled ?
            this.getInput().attr('disabled', 'disabled') :
            this.getInput().removeAttr('disabled');

    }

}, {

    live : true

});

});
