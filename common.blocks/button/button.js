modules.define(
    'button',
    ['i-bem__dom', 'jquery', 'dom'],
    function(provide, BEMDOM, $, dom) {

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
                .setMod('pressed');
    },

    _clearRefocusOnBlur : function() {
        this._refocusOnBlur = false;
    },

    _onPointerRelease : function(e) {
        this.unbindFromDoc('pointerrelease', this._onPointerRelease);

        if(this.hasMod('togglable') && dom.contains(this.domElem, $(e.target))) {
            this.getMod('togglable') === 'check'?
                this.toggleMod('checked') :
                this.setMod('checked');
        }

        this.delMod('pressed');
    },

    _onPointerClick : function(e) {
        this.hasMod('disabled')?
            e.preventDefault() :
            this
                .setMod('focused')
                .emit('click');
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
}));

});
