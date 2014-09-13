/**
 * @module popup
 */

modules.define(
    'popup',
    function(provide, Popup) {

/**
 * @exports
 * @class popup
 * @bem
 */
provide(Popup.decl({ modName : 'target', modVal : 'position' }, /** @lends popup.prototype */{
    beforeSetMod : {
        'visible' : {
            'true' : function() {
                if(!this._position)
                    throw Error('Can\'t show popup without position');
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._position = null;
            }
        }
    },

    /**
     * Sets position
     * @param {Number} left x-coordinate
     * @param {Number} top y-coordinate
     * @returns {popup} this
     */
    setPosition : function(left, top) {
        this._position = { left : left, top : top };
        return this.redraw();
    },

    /**
     * @override
     */
    _calcTargetDimensions : function() {
        var pos = this._position;

        return {
            left : pos.left,
            top : pos.top,
            width : 0,
            height : 0
        };
    }
}));

});
