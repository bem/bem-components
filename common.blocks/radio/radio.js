/**
 * @module radio
 */

modules.define(
    'radio',
    ['i-bem__dom', 'jquery', 'dom', 'radio-option'],
    function(provide, BEMDOM, $, dom) {

var undef;

/**
 * @exports
 * @class radio
 * @bem
 */
provide(BEMDOM.decl(this.name, /** @lends radio.prototype */{
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
                var checkedOption = this.findBlockInside({
                        block : 'radio-option',
                        modName : 'checked',
                        modVal : true
                    });

                this._inSetVal = false;
                this._val = checkedOption? checkedOption.getVal() : undef;
                this._options = undef;
            }
        },

        'disabled' : function(modName, modVal) {
            this.getOptions().forEach(function(option) {
                option.setMod(modName, modVal);
            });
        },

        'focused' : {
            'true' : function() {
                if(dom.containsFocus(this.domElem)) return;

                var options = this.getOptions(),
                    i = 0, option;

                while(option = options[i++]) {
                    if(!option.hasMod('disabled')) {
                        option.setMod('focused');
                        return;
                    }
                }
            },

            '' : function() {
                var focusedOption = this.findBlockInside({
                        block : 'radio-option',
                        modName : 'focused',
                        modVal : true
                    });

                focusedOption && focusedOption.delMod('focused');
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

        var isValUndef = val === undef;

        isValUndef || (val = String(val));

        if(this._val !== val) {
            if(isValUndef) {
                this._val !== undef && this.getCheckedOption().delMod('checked');
                this._val = undef;
                this.emit('change', data);
            } else {
                var option = this._getOptionByVal(val);
                if(option) {
                    this._val !== undef && this.getCheckedOption().delMod('checked');
                    this._val = option.getVal();
                    option.setMod('checked');
                    this.emit('change', data);
                }
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
        return this.getOptions()[0].getName();
    },

    /**
     * Returns options
     * @returns {radio-option[]}
     */
    getOptions : function() {
        return this._options || (this._options = this.findBlocksInside('radio-option'));
    },

    /**
     * Returns checked option
     * @returns {radio-option[]|undefined}
     */
    getCheckedOption : function() {
        return this._getOptionByVal(this._val);
    },

    _getOptionByVal : function(val) {
        var options = this.getOptions(),
            i = 0, option;

        while(option = options[i++]) {
            if(option.getVal() === val) {
                return option;
            }
        }
    },

    _onOptionCheck : function(e) {
        if(this._inSetVal) return;

        var option = e.target,
            optionVal = option.getVal();

        if(this._val === optionVal) {
            option.hasMod('checked')?
                // on block init value set in constructor, we need remove old checked and emit "change" event
                this.getOptions().forEach(function(option) {
                    option.getVal() !== optionVal && option.delMod('checked');
                }) :
                this._val = undef;
            this.emit('change');
        } else {
            this.setVal(optionVal);
        }
    },

    _onOptionFocus : function(e) {
        this.setMod('focused', e.target.getMod('focused'));
    }
}, /** @lends radio */{
    live : function() {
        var ptp = this.prototype;
        this
            .liveInitOnBlockInsideEvent(
                { modName : 'checked', modVal : '*' },
                'radio-option',
                ptp._onOptionCheck)
            .liveInitOnBlockInsideEvent(
                { modName : 'focused', modVal : '*' },
                'radio-option',
                ptp._onOptionFocus);
    }
}));

});
