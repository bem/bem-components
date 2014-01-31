/**
 * @module i-bem__dom
 */

modules.define('i-bem__dom', ['jquery', 'ua', 'dom'], function(provide, $, ua, dom, BEMDOM) {

var KEYDOWN_EVENT = (ua.opera && ua.version < 12.10) ? 'keypress' : 'keydown';

/**
 * @exports
 * @class popup
 * @bem
 */
BEMDOM.decl({ block : 'popup', modName : 'autoclosable', modVal : true }, /** @lends popup.prototype */{
    onSetMod : {
        'visible' : {
            'true' : function() {
                this
                    // NOTE: nextTick because of event bubling to document
                    .nextTick(function() {
                        this
                            .bindTo('pointerclick', this._onPointerClick)
                            .bindToDoc('pointerclick', this._onDocPointerClick)
                            .bindToDoc(KEYDOWN_EVENT, this._onDocKeyDown);
                    })
                    .__base.apply(this, arguments);
            },

            '' : function() {
                this
                    .unbindFrom('pointerclick', this._onPointerClick)
                    .unbindFromDoc('pointerclick', this._onDocPointerClick)
                    .unbindFromDoc(KEYDOWN_EVENT, this._onDocKeyDown)
                    .__base.apply(this, arguments);
            }
        }
    },

    _onPointerClick : function() {
        this._inPopupPointerClick = true;
    },

    _onDocPointerClick : function() {
        this._inPopupPointerClick?
           this._inPopupPointerClick = null :
           this.delMod('visible');
    },

    _onDocKeyDown : function(e) {
        // on ESC
        e.keyCode === 27 &&
            // omit ESC in inputs, selects and etc.
            !dom.isFocusable($(e.target)) &&
                this.delMod('visible');
    }

});

provide(BEMDOM);

});
