/**
 * @module i-bem__dom
 */

modules.define('i-bem__dom', ['jquery', 'dom'], function(provide, $, dom, BEMDOM) {

/**
 * @class popup
 * @bem
 * @exports
 */
BEMDOM.decl('popup', /** @lends popup.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._owner = null;
                this._pos = null;
                this._isAttachedToScope = false;
            },

            '' : function() {

            }
        }
    },

    /**
     * Shows popup
     * @param {Number|jQuery|BEMDOM} left x-coordinate or owner DOM elem or owner BEMDOM block
     * @param {Number} [top] y-coordinate
     * @returns {this}
     */
    show : function(left, top) {
        if(arguments.length === 1) {
            this._owner = left instanceof BEMDOM?
                    left.domElem :
                    left instanceof $?
                        left : null;
            if(!this._owner) throw Error('Invalid arguments');
            this._pos = null;
        } else {
            var pos = this._pos;
            if(pos && pos.left === left && pos.top === top)
                return this;

            this._pos = { left : left, top : top };
            this._owner = null;
        }

        return this
            .setMod('visible', true)
            .repos();
    },

    /**
     * Hides popup
     * @returns {this}
     */
    hide : function() {
        return this.delMod('visible');
    },

    /**
     * Toggles popup
     * @param {Number|jQuery|BEMDOM} left x-coordinate or owner DOM elem or owner BEMDOM block
     * @param {Number} [top] y-coordinate
     * @returns {this}
     */
    toggle : function(left, top) {
        /*jshint unused:false */
        return this.hasMod('visible')?
            this.hide() :
            this.show.apply(this, arguments);
    },

    repos : function() {
        if(this._isAttachedToScope) {
            BEMDOM.scope.append(this.domElem);
            this._isAttachedToScope = true;
        }

        var dimensions = this._calcDimensions(),
            directions = this.params.directions,
            i = 0,
            direction,
            pos,
            viewportFactor,
            bestDirection,
            bestPos,
            bestViewportFactor = 0;

        while(direction = directions[i++]) {
            pos = this._calcPos(direction, dimensions);
            viewportFactor = this._calcViewportFactor(pos, dimensions);
            if(viewportFactor > bestViewportFactor || i === 1) {
                bestDirection = direction;
                bestViewportFactor = viewportFactor;
                bestPos = pos;
            }
            if(bestViewportFactor > 0.99) break;
        }

        this
            .setMod('direction', bestDirection)
            .domElem.css({ left : bestPos.left, top : bestPos.top });
    },

    _calcDimensions : function() {
        var win = this.__self.win,
            pos = this._pos,
            owner = this._owner,
            popupWidth = this.domElem.outerWidth(),
            popupHeight = this.domElem.outerHeight(),
            ownerPos = pos? pos : owner.offset(),
            winTop = win.scrollTop(),
            winLeft = win.scrollLeft(),
            winWidth = win.width(),
            winHeight = win.height();

        return {
            popupWidth : popupWidth,
            popupHeight : popupHeight,
            popupArea : popupWidth * popupHeight,

            ownerLeft : ownerPos.left,
            ownerTop : ownerPos.top,
            ownerWidth : pos? 0 : owner.outerWidth(),
            ownerHeight : pos? 0 : owner.outerHeight(),

            viewportTop : winTop,
            viewportLeft : winLeft,
            viewportBottom : winTop + winHeight,
            viewportRight : winLeft + winWidth
        };
    },

    _calcPos : function(direction, dimensions) {
        var res = {},
            offset = this.params.offset;

        if(!direction.indexOf('bottom')) { // main direction is bottom
            res.top = dimensions.ownerTop + dimensions.ownerHeight + offset;
        } else if(!direction.indexOf('top')) { // main direction is top
            res.top = dimensions.ownerTop - dimensions.popupHeight - offset;
        } else if(!direction.indexOf('left')) { // main direction is left
            res.left = dimensions.ownerLeft - dimensions.popupWidth - offset;
        } else if(!direction.indexOf('right')) { // main direction is right
            res.left = dimensions.ownerLeft + dimensions.ownerWidth + offset;
        }

        if(~direction.indexOf('-right')) { // secondary direction is right
            res.left = dimensions.ownerLeft + dimensions.ownerWidth - dimensions.popupWidth;
        } else if(~direction.indexOf('-left')) { // secondary direction is left
            res.left = dimensions.ownerLeft;
        } else if(~direction.indexOf('-bottom')) { // secondary direction is bottom
            res.top = dimensions.ownerTop + dimensions.ownerHeight - dimensions.popupHeight;
        } else if(~direction.indexOf('-top')) { // secondary direction is top
            res.top = dimensions.ownerTop;
        } else if(~direction.indexOf('-center')) { // secondary direction is center
            if(!direction.indexOf('top') || !direction.indexOf('bottom')) { // main direction is top or bottom
                res.left = dimensions.ownerLeft + dimensions.ownerWidth / 2 - dimensions.popupWidth / 2;
            } else if(!direction.indexOf('left') || !direction.indexOf('right')) { // main direction is left or right
                res.top = dimensions.ownerTop + dimensions.ownerHeight / 2 - dimensions.popupHeight / 2;
            }
        }

        return res;
    },

    _calcViewportFactor : function(pos, dimensions) {
        var intersectionLeft = Math.max(pos.left, dimensions.viewportLeft),
            intersectionRight = Math.min(pos.left + dimensions.popupWidth, dimensions.viewportRight),
            intersectionTop = Math.max(pos.top, dimensions.viewportTop),
            intersectionBottom = Math.min(pos.top + dimensions.popupHeight, dimensions.viewportBottom);

        return intersectionLeft < intersectionRight && intersectionTop < intersectionBottom? // has intersection
            (intersectionRight - intersectionLeft) *
                (intersectionBottom - intersectionTop) /
                dimensions.popupArea :
            0;
    },

    setContent : function() {

    },

    getDefaultParams : function() {
        return {
            offset : 10,
            directions : [
                'bottom-left', 'bottom-center', 'bottom-right',
                'top-left', 'top-center', 'top-right',
                'right-top', 'right-center', 'right-bottom',
                'left-top', 'left-center', 'left-bottom'
            ]
        };
    }
}, /** @lends popup */{
    live : true
});

provide(BEMDOM);

});
