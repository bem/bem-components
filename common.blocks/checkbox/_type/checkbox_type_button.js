/**
 * @module checkbox
 */

modules.define('checkbox', ['button', 'functions'], function(provide, Button, functions, Checkbox) {

/**
 * @exports
 * @class checkbox
 * @bem
 */
provide(Checkbox.declMod({ modName : 'type', modVal : 'button' }, /** @lends checkbox.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._button = this.findChildBlock(Button);
                this._button._events()
                    .on(
                        { modName : 'checked', modVal : '*' },
                        proxyModFromButton,
                        this)
                    .on(
                        { modName : 'focused', modVal : '*' },
                        proxyModFromButton,
                        this);
            }
        },

        'checked' : function(_, checked) {
            proxyModToButton.apply(this, arguments);
            this._button.domElem
                .removeAttr('aria-pressed') // checkbox accepts aria-checked instead of aria-pressed
                .attr('aria-checked', !!checked);
        },
        'disabled' : proxyModToButton,
        'focused' : function(modName, modVal) {
            proxyModToButton.call(this, modName, modVal, false);
        }
    }
}, /** @lends checkbox */{
    lazyInit : true,
    onInit : function() {

        this._events(Button).on({ modName : 'js', modVal : 'inited' }, functions.noop);
        return this.__base.apply(this, arguments);
    }
}));

function proxyModToButton(modName, modVal, callBase) {
    callBase !== false && this.__base.apply(this, arguments);
    this._button.setMod(modName, modVal);
}

function proxyModFromButton(_, data) {
    this.setMod(data.modName, data.modVal);
}

});
