/**
 * @module button
 */

/**
 * @exports
 * @class button
 * @bem
 */

export default function(Button) {
return Button.declMod({ modName : 'togglable', modVal : '*' }, /** @lends button.prototype */{
    onSetMod : {
        'checked' : function(_, modVal) {
            this.__base.apply(this, arguments);
            this.domElem.attr('aria-pressed', !!modVal);
        }
    }
});
};
