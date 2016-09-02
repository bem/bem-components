/**
 * @module radio
 */

modules.define('radio', ['button', 'functions'], function(provide, Button, Functions, Radio) {

/**
 * @exports
 * @class radio
 * @bem
 */
provide(Radio.declMod({ modName : 'type', modVal : 'button' }, /** @lends radio.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._button = this.findChildBlock(Button);
                this._events(Button)
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

        'checked' : proxyModToButton,
        'disabled' : proxyModToButton,
        'focused' : function(modName, modVal) {
            proxyModToButton.call(this, modName, modVal, false);
        }
    }
}, /** @lends radio */{
    lazyInit : true,
    onInit : function() {
        this._events(Button).on({ modName : 'js', modVal : 'inited' }, Functions.noop);
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
