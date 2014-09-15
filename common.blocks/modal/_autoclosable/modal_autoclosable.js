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
provide(Modal.decl({ modName : 'autoclosable', modVal : true }, /** @lends modal.prototype */{
    onSetMod : {
        'visible' : {
            'true' : function() {
                this.__base.apply(this, arguments);

                this
                    .bindTo('pointerclick', this._onPointerClick)
                    ._popup.on({ modName : 'visible', modVal : '' }, this._onPopupHide, this);
            },

            '' : function() {
                this.__base.apply(this, arguments);

                this
                    .unbindFrom('pointerclick', this._onPointerClick)
                    ._popup.un({ modName : 'visible', modVal : '' }, this._onPopupHide, this);
            }
        }
    },

    _onPointerClick : function(e) {
        dom.contains(this.elem('content'), $(e.target)) || this.delMod('visible');
    },

    _onPopupHide : function() {
        this.delMod('visible');
    }
}));

});
