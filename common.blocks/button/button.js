modules.define('i-bem__dom', ['jquery', 'dom'], function(provide, $, dom, BEMDOM) {

BEMDOM.decl('button', {
    beforeSetMod : {
        'focused' : {
            true : function() {
                return !this.hasMod('disabled') && dom.isFocusable(this.domElem);
            }
        },

        'pressed' : {
            true : function() {
                return !this.hasMod('disabled');
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._focused = false;
            }
        },

        'focused' : {
            true : function() {
                this.bindToWin('unload', this._onUnload); // TODO: выяснить и написать зачем это

                this._focused || this._focus();
                this.emit('focus');
            },

            '' : function() {
                this.unbindFromWin('unload', this._onUnload);

                this._focused && this._blur();
                this.emit('blur');
            }
        },

        'disabled' : {
            '*' : function(modName, modVal) {
                this.domElem.prop(modName, !!modVal);
            },

            true : function() {
                this.delMod('pressed');
            }
        },

        'pressed' : function(_, modVal) {
            this.trigger(modVal? 'press' : 'release');
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

    _onClick : function(e) {
        this.hasMod('disabled')?
            e.preventDefault() :
            this.trigger('click');
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
            .liveBindTo('pointerdown', function() {
                this.setMod('pressed');
            })
            .liveBindTo('pointerup', function() {
                this.delMod('pressed');
            })
            .liveBindTo('pointerclick', function(e) {
                this._onClick(e);
            });
    }
});

provide(BEMDOM);

});