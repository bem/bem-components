modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

BEMDOM.decl('radio', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var checkedControl = this.elem('control').filter(':checked');
                this._val = checkedControl.val();
                this._syncControlContainer(checkedControl);
            }
        }
    },
    
    getVal : function() {
        return this._val;
    },
    
    setVal : function(val) {
        val = String(val);

        if(this._val !== val) {
            var _this = this;
            this.elem('control').each(function() {
                var control = $(this);
                if(control.val() === val) {
                    _this._val = val;
                    control.prop('checked', true);
                    _this._syncControlContainer(control);
                    _this.emit('change');
                    return false;
                }
            });
        }

        return this;
    },
    
    getName : function() {
        return this.elem('control').attr('name');
    },

    _syncControlContainer : function(control) {
        var checkedLabel = this.elem('label', 'checked', true),
            label = control.closest(this.buildSelector('label'));

        checkedLabel[0] !== label[0] &&
            this
                .delMod(checkedLabel, 'checked')
                .setMod(label, 'checked');
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