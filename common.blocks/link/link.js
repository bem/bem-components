/**
 * @module link
 */

modules.define('link', ['i-bem__dom', 'control'], function(provide, BEMDOM, Control) {

/**
 * @exports
 * @class link
 * @augments control
 * @bem
 */
provide(BEMDOM.decl({ block : this.name, baseBlock : Control }, /** @lends link.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._url = this.params.url || this.domElem.attr('href');

                this.hasMod('disabled') && this.domElem.removeAttr('href');
            }
        },

        'disabled' : {
            'true' : function() {
                this.__base.apply(this, arguments);
                this.domElem.removeAttr('href');
            },

            '' : function() {
                this.__base.apply(this, arguments);
                this.domElem.attr('href', this._url);
            }
        }
    },

    /**
     * Returns url
     * @returns {String}
     */
    getUrl : function() {
        return this._url;
    },

    /**
     * Sets url
     * @param {String} url
     * @returns {link} this
     */
    setUrl : function(url) {
        this._url = url;
        this.hasMod('disabled') || this.domElem.attr('href', url);
        return this;
    },

    _onPointerClick : function(e) {
        this.hasMod('disabled')?
            e.preventDefault() :
            this.emit('click');
    }
}, /** @lends link */{
    live : function() {
        this.liveBindTo('control', 'pointerclick', this.prototype._onPointerClick);
        return this.__base.apply(this, arguments);
    }
}));

});
