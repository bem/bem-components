/**
 * @module button
 */

modules.define(
    'button',
    ['i-bem-dom', 'control', 'jquery', 'dom', 'functions', 'keyboard__codes'],
    function(provide, bemDom, Control, $, dom, functions, keyCodes) {

/**
 * @exports
 * @class button
 * @augments control
 * @bem
 */
provide(bemDom.declBlock(this.name, Control, /** @lends button.prototype */{
    beforeSetMod : {
        'pressed' : {
            'true' : function() {
                return !this.hasMod('disabled') || this.hasMod('togglable');
            }
        },

        'focused' : {
            '' : function() {
                return !this._isPointerPressInProgress;
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._isPointerPressInProgress = false;
                this._focusedByPointer = false;
            }
        },

        'disabled' : {
            'true' : function() {
                this.__base.apply(this, arguments);
                this.hasMod('togglable') || this.delMod('pressed');
                this.domElem.attr('aria-disabled', true);
            },
            '' : function() {
                this.__base.apply(this, arguments);
                this.domElem.removeAttr('aria-disabled');
            }
        },

        'focused' : {
            'true' : function() {
                this.__base.apply(this, arguments);
                this._focusedByPointer || this.setMod('focused-hard');
            },

            '' : function() {
                this.__base.apply(this, arguments);
                this.delMod('focused-hard');
            }
        }
    },

    /**
     * Returns text of the button
     * @returns {String}
     */
    getText : function() {
        return this._elem('text').domElem.text();
    },

    /**
     * Sets text to the button
     * @param {String} text
     * @returns {button} this
     */
    setText : function(text) {
        this._elem('text').domElem.text(text || '');
        return this;
    },

    _onFocus : function() {
        if(this._isPointerPressInProgress) return;

        this.__base.apply(this, arguments);
        this._domEvents('control').on('keydown', this._onKeyDown);
    },

    _onBlur : function() {
        this._domEvents('control').un('keydown', this._onKeyDown);
        this.__base.apply(this, arguments);
    },

    _onMouseDown : function(e) {
        e.preventDefault(); // NOTE: prevents button from being blurred at least in FF and Safari
        this._domEvents().un('mousedown', this._onMouseDown);
    },

    _onPointerPress : function() {
        this._domEvents().on('mousedown', this._onMouseDown);
        if(!this.hasMod('disabled')) {
            this._isPointerPressInProgress = true;
            this._domEvents(bemDom.doc).on('pointerrelease', this._onPointerRelease);
            this.setMod('pressed');
        }
    },

    _onPointerRelease : function(e) {
        this._isPointerPressInProgress = false;
        this._domEvents(bemDom.doc).un('pointerrelease', this._onPointerRelease);

        if(e.originalEvent.type === 'pointerup' && dom.contains(this.findMixedElem('control').domElem, $(e.target))) {
            this._focusedByPointer = true;
            this._focus();
            this._focusedByPointer = false;
            this._domEvents().once('pointerclick', this._onPointerClick);
        } else {
            this._blur();
        }

        this.delMod('pressed');
    },

    _onPointerClick : function() {
        this
            ._updateChecked()
            ._emit('click');
    },

    _onKeyDown : function(e) {
        if(this.hasMod('disabled')) return;

        var keyCode = e.keyCode;
        if(keyCode === keyCodes.SPACE || keyCode === keyCodes.ENTER) {
            this._domEvents('control')
                .un('keydown', this._onKeyDown)
                .on('keyup', this._onKeyUp);

            this._updateChecked()
                .setMod('pressed');
        }
    },

    _onKeyUp : function(e) {
        this._domEvents('control')
            .un('keyup', this._onKeyUp)
            .on('keydown', this._onKeyDown);

        this.delMod('pressed');

        e.keyCode === keyCodes.SPACE && this._doAction();

        this._emit('click');
    },

    _updateChecked : function() {
        this.hasMod('togglable') &&
            (this.hasMod('togglable', 'check')?
                this.toggleMod('checked') :
                this.setMod('checked'));

        return this;
    },

    _doAction : functions.noop
}, /** @lends button */{
    lazyInit : true,
    onInit : function() {
        this._domEvents('control').on('pointerpress', this.prototype._onPointerPress);
        return this.__base.apply(this, arguments);
    }
}));

});
