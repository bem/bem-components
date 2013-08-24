modules.define(
    'i-bem__dom',
    ['jquery', 'dom', 'events'],
    function(provide, $, dom, events, BEMDOM) {

BEMDOM.decl('button', {
    beforeSetMod : {
        'focused' : {
            true : function() {
                return !this.hasMod('disabled');
            }
        },

        'pressed' : {
            true : function() {
                return !this.hasMod('disabled') || this.hasMod('toggle');
            }
        },

        'checked' : function() {
            return this.hasMod('toggle');
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
                this.hasMod('toggle') || this.delMod('pressed');
            }
        },

        'checked' : function(_, modVal) {
            this
                .setMod('pressed', modVal)
                .trigger(modVal? 'check' : 'uncheck');
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

    _onPointerDown : function() {
        this.hasMod('disabled') ||
            this
                .bindToDoc('pointerup', this._onPointerUp)
                .setMod('pressed');
    },

    _onPointerUp : function(e) {
        this.unbindFromDoc('pointerup', this._onPointerUp);

        this.hasMod('toggle')?
            dom.contains(this.domElem, $(e.target))?
                this.getMod('toggle') === 'check'?
                    this.toggleMod('checked') :
                    this.setMod('checked') :
                this.hasMod('checked') || this.delMod('pressed') :
            this.delMod('pressed');
    },

    _onPointerClick : function(e) {
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
                this._onPointerDown();
            })
            .liveBindTo('pointerclick', function(e) {
                this._onPointerClick(e);
            });
    }
});

provide(BEMDOM);

});