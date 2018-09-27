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
    onSetMod : {
        'js' : {
            inited : function() {
                this.__base.apply(this, arguments);
                this._events(this._popup)
                    .on({ modName : 'visible', modVal : '' }, this._onPopupHide, this);
            }
        },
        'visible' : {
            'true' : function() {
                this.__base.apply(this, arguments);

                this._nextTick(function() {
                    this._domEvents().on('pointerclick', this._onPointerClick);
                });
            },
            '' : function() {
                this._domEvents().un('pointerclick', this._onPointerClick);
            }
        }
    },

    _onPointerClick : function(e) {
        dom.contains(this._elem('content').domElem, $(e.target)) || this.delMod('visible');
    },

    _onPopupHide : function() {
        this.delMod('visible');
    }
}));

});
