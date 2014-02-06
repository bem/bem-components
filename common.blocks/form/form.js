modules.define('i-bem__dom', function(provide, BEMDOM) {
/**
 * Форма
 */
BEMDOM.decl('form', {

    onSetMod : {

        /**
         * Модификатор, переводящий форму в неактивное состояние
         * @param {String} modName имя модификатора ('disabled')
         * @param {String} modVal значение модификатора (true|false)
         */
        'disabled' : function(modName, modVal) {

            this.elemInstances('control').forEach(function(control) {
                modVal ? control.disable() : control.enable();
            });

            this.emit(modVal ? 'disable' : 'enable');

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
     * Сериализует форму и возвращает объект следующего вида:
     *  { <имя контрола>: <значение контрола>, ... }
     * @returns {Object|*}
     * @private
     */
    _serializeObject : function() {

        return this
            .elemInstances('control')
            .reduce(function(res, control) {
                var name = control.getName();
                if(name) res[name] = control.getVal();
                return res;
            }, {});

    },

    /**
     * Сериализует форму и возвращает массив следующего вида:
     *  [ { name: <имя контрола>, value: <значение контрола> }, ... ]
     * @returns {Array|*}
     * @private
     */
    _serializeArray : function() {

        return this
            .elemInstances('control')
            .map(function(control) {
                return {
                    name : control.getName(),
                    value : control.getVal()
                };
            });

    },

    /**
     * Очищает форму.
     * На время очистки форма блокируется от лишних операций обновления с помощью установки модификатора _locked
     */
    clear : function() {

        this.setMod('locked', true);

        this
            .elemInstances('control')
            .forEach(function(control) {
                control.clear();
            });

        this.emit('clear');

        this.afterCurrentEvent(function() {
            this.delMod('locked');
        });

    },

    /**
     * Вызывает метод update всех контролов с модификатором _updatable_yes и генерирует событие update
     * Вызывается из контрола, в котором произошли изменения
     * @param {Object} data данные изменившегося контрола
     * @param {Object} data.control ссылка на инстанс контрола
     */
    update : function(data) {

        if(this.hasMod('locked')) return;

        this
            .elemInstances('control', 'updatable', 'yes')
            .forEach(function(control) {
                data.control === control || control.update(data);
            });

        this.emit('update', data);

    },

    /**
     * Заполняет форму данными
     * На время заполнения форма блокируется от лишних операций обновления с помощью установки модификатора _locked
     * @param {Object} [data] данные (если не передан - берется из параметра fillData)
     */
    fill : function(data) {

        if(!data) data = this.params.fillData;
        if(!data) return;

        this.setMod('locked', true);

        this
            .elemInstances('control')
            .forEach(function(control) {
                control.fill(data);
            });

        this.emit('fill', data);

        this.afterCurrentEvent(function() {
            this.delMod('locked');
        });

    },

    /**
     * Валидация
     * Форма с отключенной валидацией (без модификатора _validation) всегда валидна
     */
    validate : function() {

        return true;

    }

}, {

    live : true

});

provide(BEMDOM);

});
