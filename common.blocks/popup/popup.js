modules.define('i-bem__dom', ['jquery', 'dom'], function(provide, $, dom, BEMDOM) {

BEMDOM.decl('popup', {
    onSetMod : {
        'js' : {
            'inited' : function() {

            },

            '' : function() {

            }
        }
    },

    /**
     * Shows popup
     * @param {Number|jQuery|BEMDOM} x-coordinate or owner DOM elem or owner BEMDOM block
     * @param {Number} [y] y-coordinate
     * @returns {this}
     */
    show : function(x, y) {

    },

    /**
     * Hides popup
     * @returns {this}
     */
    hide : function() {

    },

    toggle : function() {

    },

    repos : function() {

    },

    setContent : function() {

    }
});

provide(BEMDOM);

});