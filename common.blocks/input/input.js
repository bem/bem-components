BEM.DOM.decl('input', /** @lends Block.prototype */ {

    onSetMod : {

        'js' : function() {

            var _this = this,
                input = _this.elem('control');

            _this._val = input.val();
            _this.bindInput();
            _this.bindFocus();

            _this.bindTo('box', 'click', function(e) {
                _this.setMod('focused', 'yes');
            });

        },

        'disabled' : function(modName, modVal) {

            this.elem('control').attr('disabled', modVal === 'yes');

        },

        'focused' : function(modName, modVal) {

            if(this.hasMod('disabled', 'yes'))
                return false;

            var focused = modVal == 'yes';

            focused?
                this._focused || this._focus() :
                this._focused && this._blur();

            this.afterCurrentEvent(function() {
                this.trigger(focused? 'focus' : 'blur');
            });

        }

    },

    // TODO: вынести в __message
    onElemSetMod : {

        'message' : {

            'visibility' : function(elem, modName, modVal) {

                var _this = this,
                    type = _this.getMod(elem, 'type');

                if(type) {
                    var needSetMod = true;
                    modVal || _this.elem('message', 'type', type).each(function() {
                        this != elem[0] && _this.hasMod($(this), 'visibility', 'visible') && (needSetMod = false);
                    });
                    needSetMod && _this.toggleMod('message-' + type, 'yes', '', modVal === 'visible');
                }

            }

        }

    },

    bindInput : function() {

        var _this = this;

        _this.bindTo('input', function() {
            _this.
                val(_this.elem('control').val())
                _updateClear();
        });

        _this
            .on('change', _this._updateClear)
            ._updateClear();

    },

    bindFocus : function() {

        this.bindTo(this.elem('control'), {
            focus : this._onFocus,
            blur  : this._onBlur
        });

    },

    _onClearClick : function() {

        this.trigger('clear');
        this.removeInsets &&
            this.removeInsets();

        this
            .val('', { source: 'clear' })
            .setMod('focused', 'yes');

    },

    _updateClear : function() {

        return this.toggleMod(this.elem('clear'), 'visibility', 'visible', '', !!this._val);

    },

    isDisabled : function() {

        return this.hasMod('disabled', 'yes');

    },

    /**
     * Возвращает/устанавливает текущее значение
     * @param {String} [val] значение
     * @param {Object} [data] дополнительные данные
     * @returns {String|BEM} если передан параметр val, то возвращается сам блок, если не передан -- текущее значение
     */
    val : function(val, data) {

        if(typeof val == 'undefined') return this._val;

        if(this._val != val) {
            var input = this.elem('control');
            input.val() != val && input.val(val);
            this._val = val;
            this.trigger('change', data);
        }

        return this;

    },

    name : function(name) {

        return this.elem('control').attr('name');

    },

    _onFocus : function() {

        this._focused = true;
        return this.setMod('focused', 'yes');

    },

    _onBlur : function() {

        this._focused = false;
        return this.delMod('focused');

    },

    /**
     * Нормализует установку фокуса для IE
     * @private
     */
    _focus : function() {

        var input = this.elem('control')[0];
        if(input.createTextRange && !input.selectionStart) {
            var range = input.createTextRange();
            range.move('character', input.value.length);
            range.select();
        } else {
            input.focus();
        }

    },

    _blur : function() {

        this.elem('control').blur();

    }

}, {

    live : function() {

        this.liveBindTo('clear', 'leftclick', function(e) {
            this._onClearClick();
        });

        return false;

    }
});