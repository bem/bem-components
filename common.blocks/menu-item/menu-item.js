/**
 * @module menu-item
 */

modules.define( { block : 'menu-item' }, function(provide) {

/**
 * @exports
 * @class menu-item
 * @bem
 *
 * @bemmod select Type of possible select actions
 * @bemval radio Only one item can be selected
 * @bemval check Multiply items can be selected
 * @bemval radio-check Only one item can be selected and can be deselected
 */
provide(/** @lends menu-item.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
            },

            '' : function() {
            }
        }
    }
}, /** @lends menu-item */{
    live : function() {
        this
            .liveBindTo('pointerclick pointerup', function() {
            })
            .liveBindTo('focus', function() {
                //this._onFocus();
            });
    }
});

});
