/**
 * Bug 39620 - Clicks inside button elements are sometimes discarded when the mouse moves
 * https://bugs.webkit.org/show_bug.cgi?id=39620
 */
BEM.DOM.decl({ block: 'button', modName: 'webkit', modVal: 'yes' }, {

    _onClick : function(e) {

        this._stopClickSimulation();

        this.__base.apply(this, arguments);

    },

    /**
     * Создает таймер, по истечении которого триггерится событие click.
     * Если сработает нативный click, таймер очистится.
     * @private
     */
    _startClickSimulation : function() {

        // Предотвращаем запуск более 1 таймера
        this._stopClickSimulation();

        /**
         * нужно генерить нативное событие, т.к. некоторые button - простые ссылки,
         * и если нативное событие, то переход по ссылке сработает, иначе нет
         * (на таких кнопках не перехватывается click, есть только href).
         * this.changeThis не отрабатывает правильно.
         */
        this._clickTimer = setTimeout(this.changeThis(function() {
            var event = document.createEvent("HTMLEvents");
            event.initEvent("click", true, true);
            this.domElem[0].dispatchEvent(event);
        }), 1);

    },

    /**
     * Удаляет таймер
     * @private
     */
    _stopClickSimulation : function() {
        this._clickTimer && clearTimeout(this._clickTimer);
    }

}, {

    live : function() {

        this.__base.apply(this, arguments);

        this.liveBindTo('mouseup', function(e) {
            this._startClickSimulation();
        });

    }

});