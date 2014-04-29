/**
 * @module radio-group
 */

modules.define(
    'radio-group',
    ['i-bem__dom', 'jquery', 'dom', 'radio'],
    function(provide, BEMDOM, $, dom) {

var undef;
/**
 * @exports
 * @class radio-group
 * @bem
 */
provide(BEMDOM.decl(this.name, /** @lends radio-group.prototype */{
    beforeSetMod : {
        'focused' : {
            'true' : function() {
                return !this.hasMod('disabled');
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                var checkedRadio = this.findBlockInside({
                        block : 'radio',
                        modName : 'checked',
                        modVal : true
                    });

                this._inSetVal = false;
                this._val = checkedRadio? checkedRadio.getVal() : undef;
                this._radios = undef;
            }
        },

        'disabled' : function(modName, modVal) {
            this.getRadios().forEach(function(option) {
                option.setMod(modName, modVal);
            });
        },

        'focused' : {
            'true' : function() {
                if(dom.containsFocus(this.domElem)) return;

                var radios = this.getRadios(),
                    i = 0, radio;

                while(radio = radios[i++]) {
                    if(!radio.hasMod('disabled')) {
                        radio.setMod('focused');
                        return;
                    }
                }
            },

            '' : function() {
                var focusedRadio = this.findBlockInside({
                        block : 'radio',
                        modName : 'focused',
                        modVal : true
                    });

                focusedRadio && focusedRadio.delMod('focused');
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
        this._inSetVal = true;

        val = String(val);

        if(this._val !== val) {
            var radio = this._getRadioByVal(val);
            if(radio) {
                this._val !== undef && this.getCheckedRadio().delMod('checked');
                this._val = radio.getVal();
                radio.setMod('checked');
                this.emit('change', data);
            }
        }

        this._inSetVal = false;

        return this;
    },

    /**
     * Returns name of control
     * @returns {String}
     */
    getName : function() {
        return this.getRadios()[0].getName();
    },

    /**
     * Returns options
     * @returns {radio[]}
     */
    getRadios : function() {
        return this._radios || (this._radios = this.findBlocksInside('radio'));
    },

    /**
     * Returns checked option
     * @returns {radio[]|undefined}
     */
    getCheckedRadio : function() {
        return this._getRadioByVal(this._val);
    },

    _getRadioByVal : function(val) {
        var options = this.getRadios(),
            i = 0, option;

        while(option = options[i++]) {
            if(option.getVal() === val) {
                return option;
            }
        }
    },

    _onRadioCheck : function(e) {
        var radio = e.target,
            radioVal = radio.getVal();

        if(!this._inSetVal) {
            if(this._val === radioVal) {
                // on block init value set in constructor, we need remove old checked and emit "change" event
                this.getRadios().forEach(function(radio) {
                    radio.getVal() !== radioVal && radio.delMod('checked');
                });
                this.emit('change');
            } else {
                this.setVal(radioVal);
            }
        }
    },

    _onRadioFocus : function(e) {
        this.setMod('focused', e.target.getMod('focused'));
    }
}, /** @lends radio-group */{
    live : function() {
        var ptp = this.prototype;
        this
            .liveInitOnBlockInsideEvent(
                { modName : 'checked', modVal : true },
                'radio',
                ptp._onRadioCheck)
            .liveInitOnBlockInsideEvent(
                { modName : 'focused', modVal : '*' },
                'radio',
                ptp._onRadioFocus);
    }
}));

});
