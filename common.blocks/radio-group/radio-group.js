/**
 * @module radio-group
 */

import bemDom from 'bem:i-bem-dom';
import dom from 'bem:dom';
import Radio from 'bem:radio';
/**
 * @exports
 * @class radio-group
 * @bem
 */
export default bemDom.declBlock('radio-group', /** @lends radio-group.prototype */{
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
                this._checkedRadio = this.findChildBlock({
                    block : Radio,
                    modName : 'checked',
                    modVal : true
                });

                this._inSetVal = false;
                this._val = this._checkedRadio? this._checkedRadio.getVal() : undefined;
                this._radios = undefined;
            }
        },

        'disabled' : function(modName, modVal) {
            this.getRadios().setMod(modName, modVal);
        },

        'focused' : {
            'true' : function() {
                if(dom.containsFocus(this.domElem)) return;

                const radios = this.getRadios();
                let i = 0, radio;

                while(radio = radios.get(i++)) {
                    if(radio.setMod('focused').hasMod('focused')) { // we need to be sure that radio has got focus
                        return;
                    }
                }
            },

            '' : function() {
                const focusedRadio = this.findChildBlock({
                        block : Radio,
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
     * @returns {radio-group} this
     */
    setVal : function(val, data) {
        const isValUndef = val === undefined;

        isValUndef || (val = String(val));

        if(this._val !== val) {
            if(isValUndef) {
                this._val = undefined;
                this._checkedRadio.delMod('checked');
                this._emit('change', data);
            } else {
                const radio = this._getRadioByVal(val);
                if(radio) {
                    this._inSetVal = true;

                    this._val !== undefined && this._getRadioByVal(this._val).delMod('checked');
                    this._val = radio.getVal();
                    radio.setMod('checked');

                    this._inSetVal = false;
                    this._emit('change', data);
                }
            }
        }

        return this;
    },

    /**
     * Returns name of control
     * @returns {String}
     */
    getName : function() {
        return this.getRadios().get(0).getName();
    },

    /**
     * Returns options
     * @returns {radio[]}
     */
    getRadios : function() {
        return this._radios || (this._radios = this.findChildBlocks(Radio));
    },

    _getRadioByVal : function(val) {
        const radios = this.getRadios();
        let i = 0, option;

        while(option = radios.get(i++)) {
            if(option.getVal() === val) {
                return option;
            }
        }
    },

    _onRadioCheck : function(e) {
        const radioVal = (this._checkedRadio = e.target).getVal();
        if(!this._inSetVal) {
            if(this._val === radioVal) {
                // on block init value set in constructor, we need remove old checked and emit "change" event
                this.getRadios().forEach(function(radio) {
                    radio.getVal() !== radioVal && radio.delMod('checked');
                });
                this._emit('change');
            } else {
                this.setVal(radioVal);
            }
        }
    },

    _onRadioFocus : function(e) {
        this.setMod('focused', e.target.getMod('focused'));
    }
}, /** @lends radio-group */{
    lazyInit : true,
    onInit : function() {
        const ptp = this.prototype;
        this._events(Radio)
            .on({ modName : 'checked', modVal : true }, ptp._onRadioCheck)
            .on({ modName : 'focused', modVal : '*' }, ptp._onRadioFocus);
    }
});
