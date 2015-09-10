modules.define('radio-group', ['keyboard__codes'], function(provide, keyCodes, RadioGroup) {

provide(RadioGroup.decl({ modName : 'type', modVal : 'button' }, {
    beforeSetMod : {
        focused : {
            '' : function() {
                return !!this.findBlockInside({
                    block : 'radio',
                    modName : 'checked',
                    modVal : true
                });
            }
        }
    },

    onSetMod : {
        focused : {
            'true' : function() {
                this.domElem.attr(
                    'aria-activedescendant',
                    this._checkedRadio.setMod('focused').domElem.attr('id'));
                this.bindTo('keypress', this._onKeyPress);
            },

            '' : function() {
                this.getRadios().forEach(function(radio) {
                    radio.delMod('focused');
                });
                this.domElem.removeAttr('aria-activedescendant');
                this.unbindFrom('keypress', this._onKeyPress);
            }
        }
    },

    _getCheckedRadio : function() {
        return this.findBlockInside({ block : 'radio', modName : 'checked', modVal : true });
    },

    _onKeyPress : function(e) {
        var keyCode = e.keyCode,
            isArrowPrev = keyCode === keyCodes.LEFT || keyCode === keyCodes.UP,
            isArrowNext = keyCode === keyCodes.RIGHT || keyCode === keyCodes.DOWN;

        if(isArrowPrev || isArrowNext) {
            var radios = this.getRadios(),
                length = radios.length,
                index = radios.indexOf(this._checkedRadio);

            isArrowPrev?
                --index < 0 && (index = length - 1) :
                ++index >= length && (index = 0);

            radios.forEach(function(radio) {
                radio.delMod('checked').delMod('focused');
            });

            this.domElem.attr(
                'aria-activedescendant',
                radios[index].setMod('checked').setMod('focused').domElem.attr('id'));
        }
    },

    _onFocus : function(e) {
        this.setMod('focused', e.type === 'focusin');
    },

    _onRadioCheck : function(e) {
        this.__base.apply(this, arguments);
        this.getRadios().forEach(function(radio) {
            radio === e.target || radio.delMod('checked').delMod('focused');
        });
    }
}, {
    live : function() {
        this.__base.apply(this, arguments);
        this.liveBindTo('focusin focusout', this.prototype._onFocus);
    }
}));

});
