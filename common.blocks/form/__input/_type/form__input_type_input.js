modules.require(['i-bem__dom'], function(BEMDOM) {
/**
 * Инпут типа input (текстовое поле ввода)
 * Подмешивается к блоку input
 */
BEMDOM.decl({

    block : 'form',
    elem : 'input',
    modName : 'type',
    modVal : 'input'

}, {

    /**
     * Устанавливает/возвращает значение инпута
     * @param {String} [val] устанавливаемое значение
     * @returns {String}
     */
    val : function(val) {

        return typeof val === 'undefined' ?
            this.getInput().getVal() :
            this.getInput().setVal(val);

    },

    /**
     * Запускает процедуру обновления формы при изменении значения инпута
     */
    onInputChange : function() {

        this.runUpdate();

    },

    /**
     * Запускает процедуру валидации формы при потере инпутом фокуса
     */
    onInputBlur : function() {

        this.block().validate();

    }

}, {

    live : function() {

        this.__base();
        this.liveInitOnBlockEvent('change blur', 'input', function(e, data) {
            switch(e.type) {
                case 'change': this.onInputChange(e, data); break;
                case 'blur': this.onInputBlur(e, data); break;
            }
        });

    }

});

});
