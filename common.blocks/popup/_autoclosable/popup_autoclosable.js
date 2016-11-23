/**
 * @module popup
 */

modules.define(
    'popup',
    ['jquery', 'i-bem-dom', 'ua', 'dom', 'keyboard__codes'],
    function(provide, $, bemDom, ua, dom, keyCodes, Popup) {

var KEYDOWN_EVENT = ua.opera && ua.version < 12.10? 'keypress' : 'keydown',
    visiblePopupsStack = [];

/**
 * @exports
 * @class popup
 * @bem
 */
provide(Popup.declMod({ modName : 'autoclosable', modVal : true }, /** @lends popup.prototype */{
    onSetMod : {
        'visible' : {
            'true' : function() {
                visiblePopupsStack.unshift(this);
                // NOTE: nextTick because of event bubbling to document
                this
                    ._nextTick(function() {
                        this._domEvents(bemDom.doc).on('pointerclick', this._onDocPointerClick);
                    })
                    .__base.apply(this, arguments);
            },

            '' : function() {
                visiblePopupsStack.splice(visiblePopupsStack.indexOf(this), 1);
                this._domEvents(bemDom.doc).un('pointerclick', this._onDocPointerClick);
                this.__base.apply(this, arguments);
            }
        }
    },

    _onDocPointerClick : function(e) {
        if(this.hasMod('target', 'anchor') && dom.contains(this._anchor, $(e.target)))
            return;

        this._preventHideByClick?
           this._preventHideByClick = null :
           this.delMod('visible');
    }
}, /** @lends popup */{
    lazyInit : true,
    onInit : function() {
        // TODO: checkme!
        // this._domEvents(bemDom.doc).on(KEYDOWN_EVENT, onDocKeyPress);
        bemDom.doc.on(KEYDOWN_EVENT, onDocKeyPress);
    }
}));

function onDocKeyPress(e) {
    e.keyCode === keyCodes.ESC &&
        // omit ESC in inputs, selects and etc.
        visiblePopupsStack.length &&
        !dom.isEditable($(e.target)) &&
            visiblePopupsStack[0].delMod('visible');
}

});
