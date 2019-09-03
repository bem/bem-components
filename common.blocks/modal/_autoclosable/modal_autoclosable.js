/**
 * @module modal
 */

modules.define(
    'modal',
    ['jquery', 'dom'],
    function(provide, $, dom, Modal) {

/**
 * @exports
 * @class modal
 * @bem
 */
provide(Modal.declMod({ modName : 'autoclosable', modVal : true }, /** @lends modal.prototype */{
    beforeSetMod : {
        'visible' : {
            '' : function() {
                return this._pointerDownTarget === this._pointerUpTarget;
            }
        }
    },

    onSetMod : {
        'visible' : {
            'true' : function() {
                this.__base.apply(this, arguments);

                this._pointerDownTarget = null;
                this._pointerUpTarget = null;

                this
                    ._nextTick(function() {
                        this._domEvents()
                            .on('pointerdown', this._onPointerDown)
                            .on('pointerup', this._onPointerUp)
                            .on('pointerclick', this._onPointerClick);
                    })
                    ._popup._events().on({ modName : 'visible', modVal : '' }, this._onPopupHide, this);
            }
        }
    },

    _onPointerClick : function(e) {
        dom.contains(this._elem('content').domElem, $(e.target)) || this.delMod('visible');
    },

    _onPointerDown : function(e) {
        this._pointerDownTarget = e.target;
    },

    _onPointerUp : function(e) {
        this._pointerUpTarget = e.target;
    },

    _onPopupHide : function() {
        this.delMod('visible');
    }
}));

});
