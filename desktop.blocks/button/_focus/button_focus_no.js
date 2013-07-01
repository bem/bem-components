/**
 * @namespace
 * @name Button
 */
BEM.DOM.decl('button', /** @lends Button.prototype */ {

    onSetMod : {

        focused : {

            yes : function() {

                return this.hasMod('focus', 'no') ? false : this.__base.apply(this, arguments);

            }

        }

    }

});
