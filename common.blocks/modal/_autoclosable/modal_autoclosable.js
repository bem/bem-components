/**
 * @module modal
 */

import $ from 'bem:jquery';
import dom from 'bem:dom';

/**
 * @exports
 * @class modal
 * @bem
 */
export default function(Modal) {
return Modal.declMod({ modName : 'autoclosable', modVal : true }, /** @lends modal.prototype */{
    onSetMod : {
        'visible' : {
            'true' : function() {
                this.__base.apply(this, arguments);

                this
                    ._nextTick(function() {
                        this._domEvents().on('pointerclick', this._onPointerClick);
                    })
                    ._popup._events().on({ modName : 'visible', modVal : '' }, this._onPopupHide, this);
            }
        }
    },

    _onPointerClick : function(e) {
        dom.contains(this._elem('content').domElem, $(e.target)) || this.delMod('visible');
    },

    _onPopupHide : function() {
        this.delMod('visible');
    }
});
};
