modules.require(['i-bem__dom'], function(BEMDOM) {
/**
 * Болванка для инпута (поля ввода) формы с заданным типом (модификатор _type)
 */
BEMDOM.decl({

    block : 'form',
    elem : 'input',
    modName : 'type'

}, {

    /**
     * Возвращает закэшированный инстанс подмешанного инпута
     * @returns {BEM}
     */
    getInput : function() {

        return this._input || (this._input = this.findBlockOn(this.getMod('type')));

    },

    /**
     * Хелпер для перевода инпута в активное/неактивное состояние
     * @param {Boolean} isDisabled состояние, в которое нужно перевести инпут
     * @private
     */
    _toggleDisabledState : function(isDisabled) {

        var input = this.getInput();

        input.toggleMod('disabled', 'yes', '', isDisabled);

    }


});

});
