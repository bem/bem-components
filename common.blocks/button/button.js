modules.define(
    'button',
    ['i-bem__dom', 'jquery', 'dom', 'functions'],
    function(provide, BEMDOM, $, dom, functions) {

var KEY_CODE_SPACE = 32,
    KEY_CODE_ENTER = 13;

provide(BEMDOM.decl(this.name, {
    beforeSetMod : {
        'focused' : {
            'true' : function() {
                return !this.hasMod('disabled');
            }
        },

        'pressed' : {
            'true' : function() {
                return !this.hasMod('disabled') || this.hasMod('togglable');
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._focused = false;
                this._refocusOnBlur = false;
            }
        },

        'focused' : {
            'true' : function() {
                this
                    .bindToWin('unload', this._onUnload) // TODO: WTF???
                    .bindTo('keydown', this._onKeyDown);

                this._focused || this._focus();
            },

            '' : function() {
                this
                    .unbindFromWin('unload', this._onUnload)
                    .unbindFrom('keydown', this._onKeyDown);

                this._focused && this._blur();
            }
        },

        'disabled' : {
            '*' : function(modName, modVal) {
                this.domElem.prop(modName, !!modVal);
            },

            'true' : function() {
                this.hasMod('togglable') || this.delMod('pressed');
            }
        }
    },

    _onUnload : function() {
        this.delMod('focused');
    },

    _onFocus : function() {
        this._focused = true;
        this.setMod('focused');
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

        dom.contains(this.domElem, $(e.target)) &&
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
                .unbindFrom('keydown', this._onKeyDown)
                .bindTo('keyup', this._onKeyUp)
                ._updateChecked()
                .setMod('pressed');
        }
    },

    _onKeyUp : function(e) {
        this
            .unbindFrom('keyup', this._onKeyUp)
            .bindTo('keydown', this._onKeyDown)
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

    _focus : function() {
        this.domElem.focus();
    },

    _blur : function() {
        this.domElem.blur();
    },

    _doAction : functions.noop
}, {
    live : function() {
        var ptp = this.prototype;
        this
            .liveBindTo('focusin', ptp._onFocus)
            .liveBindTo('focusout', ptp._onBlur)
            .liveBindTo('pointerpress', ptp._onPointerPress);
    }
}));

});
