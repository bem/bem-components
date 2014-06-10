/**
 * @module button
 */

modules.define(
    'button',
    ['i-bem__dom', 'base-control', 'jquery', 'dom', 'functions', 'keyboard__codes', 'events'],
    function(provide, BEMDOM, BaseControl, $, dom, functions, keyCodes, events) {

/**
 * @exports
 * @class button
 * @augments base-control
 * @bem
 */
provide(BEMDOM.decl({ block : this.name, baseBlock : BaseControl }, /** @lends button.prototype */{
    beforeSetMod : {
        'pressed' : {
            'true' : function() {
                return !this.hasMod('disabled') || this.hasMod('togglable');
            }
        },

        'focused' : {
            '' : function() {
                if(this._preventLoseFocus) return false;

                var e = new events.Event('before-blur'); // NOTE: to prevent deleting focused mod from other blocks
                this.emit(e);
                return !e.isDefaultPrevented();
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._preventLoseFocus = false;
            }
        },

        'focused' : {
            'true' : function() {
                this.__base.apply(this, arguments); // should be called before binds
                this
                    .bindToWin('unload', this._onUnload) // TODO: WTF???
                    .bindTo('control', 'keydown', this._onKeyDown);
            },

            '' : function() {
                this
                    .unbindFromWin('unload', this._onUnload)
                    .unbindFrom('control', 'keydown', this._onKeyDown)
                    .__base.apply(this, arguments);
            }
        },

        'disabled' : {
            'true' : function() {
                this.__base.apply(this, arguments);
                this.hasMod('togglable') || this.delMod('pressed');
            }
        }
    },

    /**
     * Returns text of the button
     * @returns {String}
     */
    getText : function() {
        return this.elem('text').text();
    },

    /**
     * Sets text to the button
     * @param {String} text
     * @returns {this}
     */
    setText : function(text) {
        this.elem('text').text(text);
        return this;
    },

    _onUnload : function() {
        this.delMod('focused');
    },

    _onPointerPress : function() {
        this._preventLoseFocus = true;
        this.hasMod('disabled') ||
            this
                .bindToDoc('pointerrelease', this._onPointerRelease)
                .setMod('pressed');
    },

    _onPointerRelease : function(e) {
        this._preventLoseFocus = false;
        this.unbindFromDoc('pointerrelease', this._onPointerRelease);

        if(dom.contains(this.elem('control'), $(e.target))) {
            this._focus();
            this
                ._updateChecked()
                .emit('click');
        } else {
            this._blur();
        }

        this.delMod('pressed');
    },

    _onKeyDown : function(e) {
        if(this.hasMod('disabled')) return;

        var keyCode = e.keyCode;
        if(keyCode === keyCodes.SPACE || keyCode === keyCodes.ENTER) {
            this
                .unbindFrom('control', 'keydown', this._onKeyDown)
                .bindTo('control', 'keyup', this._onKeyUp)
                ._updateChecked()
                .setMod('pressed');
        }
    },

    _onKeyUp : function(e) {
        this
            .unbindFrom('control', 'keyup', this._onKeyUp)
            .bindTo('control', 'keydown', this._onKeyDown)
            .delMod('pressed');

        e.keyCode === keyCodes.SPACE && this._doAction();

        this.emit('click');
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
    live : function() {
        this.liveBindTo('control', 'pointerpress', this.prototype._onPointerPress);
        return this.__base.apply(this, arguments);
    }
}));

});
