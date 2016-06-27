/**
 * @module button
 */

modules.define('button', function(provide, Button) {

/**
 * @exports
 * @class button
 * @bem
 */

provide(Button.declMod({ modName : 'togglable', modVal : '*' }, /** @lends button.prototype */{
    onSetMod : {
        'checked' : function(_, modVal) {
            this.__base.apply(this, arguments);
            this.domElem.attr('aria-pressed', !!modVal);
        }
    }
}));

});
