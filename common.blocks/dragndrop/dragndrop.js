/**
 * @module dragndrop
 */

modules.define(
    'dragndrop',
    ['i-bem__dom'],
    function(provide, BEMDOM) {

/**
 * @exports
 * @class dragndrop
 * @bem
 *
 * @bemmod opened Represents opened state
 */
provide(BEMDOM.decl(this.name, /** @lends dragndrop.prototype */{

    onSetMod : {
        'js' : {
            'inited' : function() {
                this.setPos(this.domElem.offset().left, this.domElem.offset().top);
                this.domElem.css('position', 'absolute');
            }
        }
    },

    /**
     * Sets block's position
     * @param {Number} x Horisontal
     * @param {Number} y Vertical
     */
    setPos : function(x, y) {
        this.domElem.css({ left : x, top : y });
    },

    _getPos : function() {
        return this.blockOffset = this.domElem.offset();
    },

    _moveBlock : function(e) {
        this.moveDistance.x = this._getMousePos(e).x - this.mousePos.x;
        this.moveDistance.y = this._getMousePos(e).y - this.mousePos.y;

        var x = this.blockOffset.left + this.moveDistance.x,
            y = this.blockOffset.top + this.moveDistance.y;

        this
            .setMod('drag')
            .setPos(x, y);
    },

    _getMousePos : function(e) {
        var mouse = { x : 0, y : 0 };

        mouse.x = e.clientX || e.pageX;
        mouse.y = e.clientY || e.pageY;

        return mouse;
    },

    _unMove : function() {
        this
            .unbindFromDoc('mouseup', this._unMove)
            .unbindFromDoc('mousemove', this._moveBlock)
            .delMod('drag');
    },

    _onMouseDown : function(e){

        this.pos = this._getPos();
        this.mousePos = this._getMousePos(e);
        this.moveDistance = { x : 0, y : 0 };

        this
            .bindToDoc('mousemove', this._moveBlock)
            .bindToDoc('mouseup', this._unMove);

        return this;
    }

}, {
    live : function() {
        this.liveBindTo('mousedown', this.prototype._onMouseDown);
    }
}));

});
