/**
 * @module checkbox-group
 */

modules.define(
    'checkbox-group',
    ['i-bem-dom', 'jquery', 'dom', 'checkbox'],
    function(provide, bemDom, $, dom, Checkbox) {

var undef;
/**
 * @exports
 * @class checkbox-group
 * @bem
 */
provide(bemDom.declBlock(this.name, /** @lends checkbox-group.prototype */{
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
                this._inSetVal = false;
                this._val = this._extractVal();
                this._checkboxes = undef;
            }
        },

        'disabled' : function(modName, modVal) {
            this.getCheckboxes().setMod(modName, modVal);
        },

        'focused' : {
            'true' : function() {
                if(dom.containsFocus(this.domElem)) return;

                var checkboxes = this.getCheckboxes(),
                    i = 0, checkbox;

                while(checkbox = checkboxes.get(i++)) {
                    if(checkbox.setMod('focused').hasMod('focused')) // we need to be sure that checkbox has got focus
                        return;
                }
            },

            '' : function() {
                var focusedCheckbox = this.findChildBlock({
                        block : Checkbox,
                        modName : 'focused',
                        modVal : true
                    });

                focusedCheckbox && focusedCheckbox.delMod('focused');
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
     * @param {Array[String]} val value
     * @param {Object} [data] additional data
     * @returns {checkbox-group} this
     */
    setVal : function(val, data) {
        val = val.map(String);

        var checkboxes = this.getCheckboxes(),
            wasChanged = false,
            notFoundValsCnt = val.length,
            checkboxesCheckedModVals = checkboxes.map(function(checkbox) {
                var isChecked = checkbox.hasMod('checked'),
                    hasEqVal = !!~val.indexOf(checkbox.getVal());

                if(hasEqVal) {
                    --notFoundValsCnt;
                    isChecked || (wasChanged = true);
                } else {
                    isChecked && (wasChanged = true);
                }

                return hasEqVal;
            });

        if(wasChanged && !notFoundValsCnt) {
            this._inSetVal = true;
            checkboxes.forEach(function(checkbox, i) {
                checkbox.setMod('checked', checkboxesCheckedModVals[i]);
            });
            this._inSetVal = false;
            this._val = val;
            this._emit('change', data);
        }

        return this;
    },

    /**
     * Returns name of control
     * @returns {String}
     */
    getName : function() {
        return this.getCheckboxes().get(0).getName();
    },

    /**
     * Returns checkboxes
     * @returns {Array[checkbox]}
     */
    getCheckboxes : function() {
        return this._checkboxes || (this._checkboxes = this.findChildBlocks(Checkbox));
    },

    _extractVal : function() {
        return this.getCheckboxes()
            .filter(function(checkbox) {
                return checkbox.hasMod('checked');
            })
            .map(function(checkbox) {
                return checkbox.getVal();
            });
    },

    _onCheckboxCheck : function() {
        if(!this._inSetVal) {
            this._val = this._extractVal();
            this._emit('change');
        }
    },

    _onCheckboxFocus : function(e) {
        this.setMod('focused', e.target.getMod('focused'));
    }
}, /** @lends checkbox-group */{
    lazyInit : true,
    onInit : function() {
        var ptp = this.prototype;
        this._events(Checkbox)
            .on({ modName : 'checked', modVal : '*' }, ptp._onCheckboxCheck)
            .on({ modName : 'focused', modVal : '*' }, ptp._onCheckboxFocus);
    }
}));

});
