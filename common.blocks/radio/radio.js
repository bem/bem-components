modules.define('i-bem__dom', ['jquery'], function(provide, $, BEMDOM) {

var undef;

BEMDOM.decl('radio', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var checkedOption = this.findBlockInside({
                    block : 'radio-option',
                    modName : 'checked',
                    modVal : true
                });

                this._val = checkedOption? checkedOption.getVal() : undef;
                this._options = undef;

                BEMDOM.blocks['radio-option'].on(this.domElem, 'check', this._onOptionCheck, this);
            },

            '' : function() {
                BEMDOM.blocks['radio-option'].un(this.domElem, 'check', this._onOptionCheck, this);
            }
        },

        'disabled' : function(modName, modVal) {
            this.getOptions().forEach(function(option) {
                option.setMod(modName, modVal);
            });

            this.emit(modVal? 'disable' : 'enable');
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
            var option = this._getOptionByVal(val);
            if(option) {
                this._val !== undef && this._getOptionByVal(this._val).delMod('checked');
                this._val = option.getVal();
                option.setMod('checked');
                this.emit('change', data);
            }
        }

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
     * @returns {BEM.blocks['radio-option'][]}
     */
    getOptions : function() {
        return this._options || (this._options = this.findBlocksInside('radio-option'));
    },

    /**
     * Returns checked option
     * @returns {BEM.blocks['radio-option']|undefined}
     */
    getCheckedOption : function() {
        return this._getOptionByVal(this._val);
    },

    _onOptionCheck : function(e) {
        this.setVal(e.target.getVal());
    },

    _getOptionByVal : function(val) {
        var options = this.getOptions(),
            i = 0, option;

        while(option = options[i++]) {
            if(option.getVal() === val) {
                return option;
            }
        }
    }
});

provide(BEMDOM);

});