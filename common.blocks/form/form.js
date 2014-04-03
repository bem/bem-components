modules.define('form', ['i-bem__dom', 'objects'], function(provide, BEMDOM, objects) {
/**
 * Форма
 */
provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._changeStorage = null;
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
        var storage = this._changeStorage = {};

        this
            .elemInstances('control')
            .forEach(function(control) {
                control.setVal(val[control.getName()]);
            });

        this.nextTick(function() {
            objects.isEmpty(storage) || this.emit('change', storage);
            this._changeStorage = null;
        });
    },

    /**
     * метод зовется элементом __control
     * @private
     */
    _onControlChange : function(control, event, data) {
        var storage = this._changeStorage || {},
            name = control.getName();

        if(!name) return; // TODO как быть?

        storage[name] = { event : event, data : data };
        this._changeStorage || this.emit('change', storage);
    }
}, {
    live : true
}));

});
