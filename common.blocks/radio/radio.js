modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

BEMDOM.decl('radio', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._val = this.elem('control').filter(':checked').val();
                this._syncWithControls();
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

        if(this._val !== val) {
            var valueControl = this.elem('control').filter('[value="' + val + '"]');
            if(valueControl.length) {
                this._val = val;
                valueControl.prop('checked', true);
                this._syncWithControls(valueControl);
                this.emit('change', data);
            }
        }

        return this;
    },

    disableVal : function(val) {

    },

    enableVal : function(val) {

    },

    /**
     * Returns name of control
     * @returns {String}
     */
    getName : function() {
        return this.elem('control').attr('name');
    },

    _syncWithControls : function() {
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