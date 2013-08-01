modules.define('i-bem__dom', ['dom'], function(provide, dom, BEMDOM) {

BEMDOM.decl('input', {
    beforeSetMod : {
        'focused' : {
            true : function() {
                if(this.hasMod('disabled'))
                    return false;
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                var control = this.elem('control');

                this._val = control.val();
                this._focused = false;

                // if control already in focus we need to synchronize state
                dom.containsFocus(control) && (this.setMod('focused')._focused = true);
            }
        },

        'disabled' : function(modName, modVal) {
            this.elem('control').attr('disabled', modVal);
        },

        'focused' : function(modName, modVal) {
            modVal?
                this._focused || this._focus() :
                this._focused && this._blur();

            this.emit(modVal? 'focus' : 'blur');
        }
    },

    /**
     * Returns whether the control is disabled
     * @returns {Boolean}
     */
    isDisabled : function() {
        return this.hasMod('disabled');
    },

    /**
     * Gets/sets control value
     * @param {String} [val] value, if present then the value is set, otherwise the current value is returned
     * @param {Object} [data] additional data, for case if value is set
     * @returns {String|this}
     */
    val : function(val, data) {
        if(!arguments.length) return this._val;

        val = String(val);

        if(this._val !== val) {
            this._val = val;
            this.elem('control').val(val);
            this.emit('change', data);
        }

        return this;
    },

    /**
     * Returns name of control
     * @returns {String}
     */
    name : function() {
        return this.elem('control').attr('name');
    },

    /**
     * @see http://stackoverflow.com/questions/4185821#4186100
     * @return {Number} Позиция конца выделения. Если ничего не выделено, то возвращается 0.
     */
    getSelectionEnd : function() { // TODO: для чего это публичный метод, кто и как им пользуется?
        var input = this.elem('control')[0];
        return typeof input.selectionEnd === 'number'?
            input.selectionEnd :
            0;
    },

    _onFocus : function() {
        this._focused = true;
        this.setMod('focused');
    },

    _onBlur : function() {
        this._focused = false;
        this.delMod('focused');
    },

    _focus : function() {
        this.elem('control').focus();
    },

    _blur : function() {
        this.elem('control').blur();
    }
}, {
    live : function() {
        this
            .liveBindTo('control', 'focusin', function(e) {
                this._onFocus(e);
            })
            .liveBindTo('control', 'focusout', function(e) {
                this._onBlur(e);
            });

        return false;
    }
});

provide(BEMDOM);

});
