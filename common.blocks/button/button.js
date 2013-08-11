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
                this._focused = dom.isFocusable(this.domElem) && dom.containsFocus(this.domElem);

                this._focused?
                    this.setMod('focused') : // if control already in focus we need to set focused mod
                    this.hasMod('focused') && this._focus(); // if block already has focused mod we need to focus control
            }
        },

        'focused' : {
            true : function() {
                this.bindToWin('unload', this._onUnload); // TODO: выяснить и написать зачем это

                this._focused || this.domElem.focus();
                this.emit('focus');
            },

            '' : function() {
                this.unbindFromWin('unload', this._onUnload);

                this._focused && this.domElem.blur();
                this.emit('blur');
            }
        },

        'disabled' : {
            '*' : function(_, modVal) {
                this.domElem.attr('disabled', modVal);
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
