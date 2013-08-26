modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

BEMDOM.decl('radio-option', {
    beforeSetMod : {
        'focused' : {
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

        'checked' : function(modName, modVal) {
            this.elem('control').prop(modName, modVal);
            modVal && this.emit('check');
        },

        'disabled' : function(modName, modVal) {
            this.elem('control').prop(modName, modVal);
        },

        'focused' : {
            true : function() {
                this._focused || this._focus();
                this.emit('focus');
            },

            '' : function() {
                this._focused && this._blur();
                this.emit('blur');
            }
        }
    },

    /**
     * Returns control value
     * @returns {String}
     */
    getVal : function() {
        return this.elem('control').val();
    },

    /**
     * Returns name of control
     * @returns {String}
     */
    getName : function() {
        return this.elem('control').attr('name');
    },

    _focus : function() {
        this.elem('control').focus();
    },

    _blur : function() {
        this.elem('control').blur();
    },

    _onFocus : function() {
        this._focused = true;
        this.setMod('focused');
    },

    _onBlur : function() {
        this._focused = false;
        this.delMod('focused');
    },

    _onPointerClick : function() {
        this.hasMod('disabled') || this.setMod('checked');
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
            .liveBindTo('pointerclick', function() {
                this._onPointerClick();
            });
    }
});

provide(BEMDOM);

});