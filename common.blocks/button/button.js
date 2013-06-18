/**
 * @namespace
 * @name Button
 */
BEM.DOM.decl('button', /** @lends Button.prototype */ {

    onSetMod : {

        'js' : function() {

            var disabled = this.isDisabled(),
                domElem = this.domElem;

            (this._href = domElem.attr('href')) && disabled &&
                domElem.removeAttr('href');

            domElem.attr('disabled', disabled);

        },

        'disabled' : function(modName, modVal) {

            var disable = modVal == 'yes',
                domElem = this.domElem;

            this._href && (disable?
                domElem.removeAttr('href') :
                domElem.attr('href', this._href));

            this.afterCurrentEvent(function() {
                domElem.attr('disabled', disable);
            });

        },

        'pressed' : function(modName, modVal) {

            if (this.isDisabled()) return false;

            this.trigger(modVal == 'yes' ? 'press' : 'release');

        }

    },

    /**
     * Шорткат для проверки модификатора disabled_yes
     * @returns {Boolean}
     */
    isDisabled : function() {

        return this.hasMod('disabled', 'yes');

    },

    /**
     * Получение/установка урла (для кнопки-ссылки)
     * @param {String} [val] урл
     */
    url : function(val) {

        if(typeof val == 'undefined') {
            return this._href;
        } else {
            this._href = val;
            this.isDisabled() || this.domElem.attr('href', val);
            return this;
        }

    }

});
