/**
 * @module button
 */

modules.define(
    'button',
    ['i-bem__dom', 'base-control', 'jquery', 'dom', 'functions'],
    function(provide, BEMDOM, BaseControl, $, dom, functions) {

var KEY_CODE_SPACE = 32,
    KEY_CODE_ENTER = 13;

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
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._refocusOnBlur = false;
            }
        },

        'focused' : {
            'true' : function() {
                this
                    .bindToWin('unload', this._onUnload) // TODO: WTF???
                    .bindTo('control', 'keydown', this._onKeyDown)
                    .__base.apply(this, arguments);
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

    _onUnload : function() {
        this.delMod('focused');
    },

    _onBlur : function() {
        this._focused = false;
        if(this._refocusOnBlur) {
            this._refocusOnBlur = false;
            this.nextTick(this._focus);
        } else {
            this.delMod('focused');
        }
    },

    _onPointerPress : function() {
        this._refocusOnBlur = true;
        this.nextTick(this._clearRefocusOnBlur);

        this.hasMod('disabled') ||
            this
                .bindToDoc('pointerrelease', this._onPointerRelease)
                .setMod('pressed')
                .setMod('focused');
    },

    _clearRefocusOnBlur : function() {
        this._refocusOnBlur = false;
    },

    _onPointerRelease : function(e) {
        this.unbindFromDoc('pointerrelease', this._onPointerRelease);

        dom.contains(this.elem('control'), $(e.target)) &&
            this
                ._updateChecked()
                .emit('click');

        this.delMod('pressed');
    },

    _onKeyDown : function(e) {
        if(this.hasMod('disabled')) return;

        var keyCode = e.keyCode;
        if(keyCode === KEY_CODE_SPACE || keyCode === KEY_CODE_ENTER) {
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

        e.keyCode === KEY_CODE_SPACE && this._doAction();

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
