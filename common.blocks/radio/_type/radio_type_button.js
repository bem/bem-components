/**
 * @module radio
 */

modules.define('radio', ['button'], function(provide, _, Radio) {

/**
 * @exports
 * @class radio
 * @bem
 */
provide(Radio.decl({ modName : 'type', modVal : 'button' }, /** @lends radio.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._button = this.findBlockInside('button')
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
    live : function() {
        this.liveInitOnBlockInsideEvent({ modName : 'js', modVal : 'inited' }, 'button');
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
