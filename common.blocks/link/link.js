/**
 * @module link
 */

import bemDom from 'bem:i-bem-dom';
import Control from 'bem:control';
import events from 'bem:events';

/**
 * @exports
 * @class link
 * @augments control
 * @bem
 */
export default bemDom.declBlock('link', Control, /** @lends link.prototype */{
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
                this.domElem
                    .removeAttr('href')
                    .attr('aria-disabled', true);
            },

            '' : function() {
                this.__base.apply(this, arguments);
                this.domElem
                    .attr('href', this._url)
                    .removeAttr('aria-disabled');
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
        if(this.hasMod('disabled')) {
            e.preventDefault();
        } else {
            const event = new events.Event('click');
            this._emit(event);
            event.isDefaultPrevented() && e.preventDefault();
        }
    }
}, /** @lends link */{
    lazyInit : true,
    onInit : function() {
        this._domEvents('control').on('pointerclick', this.prototype._onPointerClick);
        return this.__base.apply(this, arguments);
    }
});
