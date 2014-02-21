modules.define(
    { block : 'button' },
    ['jquery', 'dom'],
    function(provide, $, dom) {

provide({
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
        },

        'checked' : function() {
            return this.hasMod('togglable');
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._focused = false;
            }
        },

        'focused' : {
            'true' : function() {
                this.bindToWin('unload', this._onUnload); // TODO: выяснить и написать зачем это
                this._focused || this._focus();
            },

            '' : function() {
                this.unbindFromWin('unload', this._onUnload);
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
        },

        'checked' : function(_, modVal) {
            this
                .setMod('pressed', modVal)
                .emit(modVal? 'check' : 'uncheck');
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
        this.delMod('focused');
    },

    _onPointerPress : function() {
        this.hasMod('disabled') ||
            this
                .bindToDoc('pointerrelease', this._onPointerRelease)
                .setMod('pressed');
    },

    _onPointerRelease : function(e) {
        this.unbindFromDoc('pointerrelease', this._onPointerRelease);

        this.hasMod('togglable')?
            dom.contains(this.domElem, $(e.target))?
                this.getMod('togglable') === 'check'?
                    this.toggleMod('checked') :
                    this.setMod('checked') :
                this.hasMod('checked') || this.delMod('pressed') :
            this.delMod('pressed');
    },

    _onPointerClick : function(e) {
        this.hasMod('disabled')?
            e.preventDefault() :
            this.emit('click');
    },

    _focus : function() {
        this.domElem.focus();
    },

    _blur : function() {
        this.domElem.blur();
    }
}, {
    live : function() {
        this
            .liveBindTo('focusin', function() {
                this._onFocus();
            })
            .liveBindTo('focusout', function() {
                this._onBlur();
            })
            .liveBindTo('pointerpress', function() {
                this._onPointerPress();
            })
            .liveBindTo('pointerclick', function(e) {
                this._onPointerClick(e);
            });
    }
});

});
