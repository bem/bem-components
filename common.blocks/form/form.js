modules.define('form', ['i-bem__dom'], function(provide, BEMDOM) {
/**
 * Форма
 */
provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._setValInProgress = false;
            }
        },

        'disabled' : function(modName, modVal) {
            this.elemInstances('control').forEach(function(control) {
                control.setMod(modName, modVal);
            });
        }
    },

    /**
     * Сериализует форму
     * @returns {Object}
     */
    getVal : function() {
        return this.elemInstances('control').reduce(function(res, control) {
            var name = control.getName();
            name && (res[name] = control.getVal());
            return res;
        }, {});
    },

    /**
     * Заполняет форму данными
     * @param {Object} val данные (если не передан - берется из параметра fillData)
     */
    setVal : function(val) {
        this._setValInProgress = true;
        this
            .elemInstances('control')
            .forEach(function(control) {
                control.setVal(val[control.getName()]);
            });
        this._setValInProgress = false;
        this.emit('change'); // TODO если значение не поменялось - не эмитим change
        // TODO класть вторым аргументом хеш - в ключах имена, в листьях хэши с полями event и data
    },

    /**
     * метод зовется элементом __control
     * @private
     */
    _onControlChange : function() {
        if(this._setValInProgress) return;
        this.emit('change');
    }
}, {
    live : true
}));

});
