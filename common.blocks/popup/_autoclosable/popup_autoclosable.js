/**
 * @module popup
 */

modules.define(
    'popup',
    ['jquery', 'i-bem__dom', 'ua', 'dom'],
    function(provide, $, BEMDOM, ua, dom, Popup) {

var KEYDOWN_EVENT = (ua.opera && ua.version < 12.10)? 'keypress' : 'keydown',
    visiblePopupsStack = [];

/**
 * @exports
 * @class popup
 * @bem
 */
provide(Popup.decl({ modName : 'autoclosable', modVal : true }, /** @lends popup.prototype */{
    onSetMod : {
        'visible' : {
            'true' : function() {
                visiblePopupsStack.unshift(this);
                this
                    // NOTE: nextTick because of event bubbling to document
                    .nextTick(function() {
                        this.bindToDoc('pointerclick', this._onDocPointerClick);
                    })
                    .__base.apply(this, arguments);
            },

            '' : function() {
                visiblePopupsStack.splice(visiblePopupsStack.indexOf(this), 1);
                this
                    .unbindFromDoc('pointerclick', this._onDocPointerClick)
                    .__base.apply(this, arguments);
            }
        }
    },

    _onDocPointerClick : function() {
        this._inPopupPointerClick?
           this._inPopupPointerClick = null :
           this.delMod('visible');
    }
}, {
    live : function() {
        BEMDOM.doc.on(KEYDOWN_EVENT, onDocKeyDown);
    }
}));

function onDocKeyDown(e) {
    // on ESC
    e.keyCode === 27 &&
        // omit ESC in inputs, selects and etc.
        !dom.isFocusable($(e.target)) &&
        visiblePopupsStack.length &&
            visiblePopupsStack[0].delMod('visible');
}

});
