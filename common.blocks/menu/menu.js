/**
 * @module menu
 */

modules.define( { block : 'menu' }, function(provide) {

/**
 * @exports
 * @class menu
 * @bem
 *
 * @bemmod select Type of possible select actions
 * @bemval radio Only one item can be selected
 * @bemval check Multiply items can be selected
 * @bemval radio-check Only one item can be selected and can be deselected
 */
provide(/** @lends menu.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
            },

            '' : function() {
            }
        }
    },

    _onItemHover : function() {
    },

    _onItemCheck : function() {
    }
}, /** @lends menu */{
    live : function() {
        this
            .liveInitOnBlockInsideEvent({ modName : 'hovered', modVal : true }, 'menu-item', function(e) {
                this._onItemHover(e.target);
            })
            .liveInitOnBlockInsideEvent({ modName : 'checked', modVal : true }, 'menu-item', function(e) {
                this._onItemCheck(e.target);
            });
    }
});

});
