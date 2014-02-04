modules.require(['i-bem__dom'], function(BEMDOM) {

BEMDOM.decl('form', {

    onSetMod : {

        'disabled' : function(modName, modVal) {

            this.elemInstances('input').forEach(function(input) {
                modVal ? input.disable() : input.enable();
            });

            this.trigger(modVal ? 'disabled' : 'enabled');

        }

    },

    /**
     * Сериализует форму
     * @param {String} [type] тип сериализованных данных (по умолчанию - массив)
     * @returns {*}
     */
    serialize : function(type) {

        switch(type) {
            case 'object': return this._serializeObject();
            case 'array': return this._serializeArray();
            default: return this._serializeArray();
        }

    },

    /**
     * Сериализует форму и возвращает объект следующего вида: { <имя инпута>: <значение инпута>, ... }
     * @returns {Object|*}
     * @private
     */
    _serializeObject : function() {

        return this
            .elemInstances('input')
            .reduce(function(res, input) {
                var name = input.getName();

                if(name) res[name] = input.val();

                return res;
            }, {});

    },

    /**
     * Сериализует форму и возвращает массив следующего вида: [ { name: <имя инпута>, value: <значение инпута> }, ... ]
     * @returns {Array|*}
     * @private
     */
    _serializeArray : function() {

        return this
            .elemInstances('input')
            .map(function(input) {
                return {
                    name : input.getName(),
                    value : input.val()
                };
            });

    },

    /**
     * Очищает форму.
     * На время очистки форма блокируется от лишних операций обновления с помощью установки модификатора _locked_yes
     */
    clear : function() {

        this.setMod('locked', 'yes');

        this
            .elemInstances('input')
            .forEach(function(input) {
                input.clear();
            });

        this.trigger('clear').trigger('update');

        this.afterCurrentEvent(function() {
            this.delMod('locked');
        });

    },

    /**
     * Вызывает метод update всех инпутов с модификатором _updatable_yes и генерирует событие update
     * Вызывается из инпута, в котором произошли изменения
     * @param {Object} data данные изменившегося инпута
     * @param {Object} [data.type] тип инпута (напр. input, select, checkbox и т.п.)
     * @param {Object} [data.name] имя инпута
     * @param {Object} data.value значение инпута
     */
    update : function(data) {

        if(this.hasMod('locked')) return;

        this
            .elemInstances('input', 'updatable', 'yes')
            .forEach(function(input) {
                input.update(data);
            });

        this.trigger('update', data);

    },

    /**
     * Заполняет форму данными
     * На время заполнения форма блокируется от лишних операций обновления с помощью установки модификатора _locked_yes
     * @param {Object} [data] данные (если не передан - берется из параметра fillData)
     */
    fill : function(data) {

        if(!data) data = this.params.fillData;
        if(!data) return;

        this.setMod('locked', 'yes');

        this
            .elemInstances('input')
            .forEach(function(input) {
                input.fill(data);
            });

        this.trigger('fill', data).trigger('update');

        this.afterCurrentEvent(function() {
            this.delMod('locked');
        });

    },

    /**
     * Заглушка для валидации формы
     */
    validate : function() {}

}, {

    live : true

});

});
