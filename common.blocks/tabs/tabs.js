/**
 * @module tabs
 */

modules.define('tabs', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

/**
 * @exports
 * @class tabs
 * @bem
 */
provide(BEMDOM.decl(this.name,  /** @lends tabs.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                var theTabs = this;

                this._boxList = {};
                this._radioGroup = this.findBlockOn(this.elem('tabs-group'), 'radio-group');

                this.elem('box').each(function() {
                    var $this = $(this),
                        tabParams = theTabs.elemParams($this);
                    theTabs._boxList[tabParams.id] = $this;
                });
            }
        }
    },

    _onRadioGroupChange : function() {
        var newVal = this._radioGroup.getVal();

        this.delMod(this.elem('box'), 'selected');
        this.setMod(this._boxList[newVal], 'selected');
    },

    /**
     * Sets active tab by index number
     * @param {Number} index
     * @returns {tabs} this
     */
    changeTab : function(index) {
        this.findBlockInside('radio-group').setVal(index);
        return this;
    }
},  /** @lends tabs */{
    live : function() {
        this.liveInitOnBlockInsideEvent('change', 'radio-group', this.prototype._onRadioGroupChange);
    }
}));

});
