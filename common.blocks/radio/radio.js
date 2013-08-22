modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

var undef;

BEMDOM.decl('radio', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._val = this.elem('control').filter(':checked:not(:disabled)').val();
                this._update();
            }
        }
    },

    /**
     * Returns control value
     * @returns {String}
     */
    getVal : function() {
        return this._val;
    },

    /**
     * Sets control value
     * @param {String} val value
     * @param {Object} [data] additional data
     * @returns {this}
     */
    setVal : function(val, data) {
        val = String(val);

        var valueControl = this._getControlByVal(val);
        if(valueControl.length) {
            valueControl
                .prop('checked', true)
                .prop('disabled') &&
                    (val = undef);

            if(this._val !== val) {
                this._val = val;
                this._update(valueControl);
                this.emit('change', data);
            }
        }

        return this;
    },

    /**
     * Disables option by given value
     * @param {String} val value
     * @returns {this}
     */
    disableOptionByVal : function(val) {
        return this._updateOptionDisabled(val, true);
    },

    /**
     * Enables option by given value
     * @param {String} val value
     * @returns {this}
     */
    enableOptionByVal : function(val) {
        return this._updateOptionDisabled(val, false);
    },

    /**
     * Returns name of control
     * @returns {String}
     */
    getName : function() {
        return this.elem('control').attr('name');
    },

    _updateOptionDisabled : function(val, disable) {
        var valueControl = this._getControlByVal(val);
        if(valueControl.length && valueControl.prop('disabled') !== disable) {
            valueControl
                .prop('disabled', disable)
                .prop('checked') &&
                    this.setVal(val);
        }

        return this;
    },

    _getControlByVal : function(val) {
        return this.elem('control').filter('[value="' + val + '"]');
    },

    /**
     * Synchronizes state of block after updating
     */
    _update : function() {
        var controls = this.elem('control'),
            _this = this;

        this.elem('label').each(function(i) {
            var label = $(this),
                control = controls.eq(i);

            _this
                .setMod(label, 'checked', control.prop('checked'))
                .setMod(label, 'disabled', control.prop('disabled'));
        });
    },

    _onControlPointerClick : function(e) {
        this.setVal($(e.currentTarget).val());
    }
}, {
    live : function() {
        this.liveBindTo('control', 'pointerclick', function(e) {
            this._onControlPointerClick(e);
        });

        return false;
    }
});

provide(BEMDOM);

});