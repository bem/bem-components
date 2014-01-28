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
            var owner = left instanceof BEMDOM?
                    left.domElem :
                    left instanceof $?
                        left : null;

            if(this._owner) {
                if(this._owner[0] !== owner[0]) this._owner = owner;
                else return this;
            } else {
                this._owner = owner;
            }

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
     * @returns {this}
     */
    toggle : function() {
        return this.hasMod('visible')?
            this.hide() :
            this.show(this._owner);
    },

    repos : function() {
//        var dimensions = this._calcDimensions();


    },

    _calcDimensions : function() {
        var win = this.__self.win,
            pos = this._pos,
            owner = this._owner,
            popupWidth = this.domElem.outerWidth(),
            popupHeight = this.domElem.outerHeight(),
            ownerPos = pos? pos : owner.offset(),
            windowTop = win.scrollTop(),
            windowLeft = win.scrollLeft();

        return {
            popupWidth : popupWidth,
            popupHeight : popupHeight,

            ownerLeft : ownerPos.left,
            ownerTop : ownerPos.top,
            ownerWidth : pos? 0 : owner.outerWidth(),
            ownerHeight : pos? 0 : owner.outerHeight(),

            viewportTop : windowTop,
            viewportLeft : windowLeft,
            viewportBottom : windowTop + win.height(),
            viewportRight : windowLeft + win.width()
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

    _checkViewport : function(pos, dimensions) {
        return pos.top >= dimensions.viewportTop &&
            pos.top + dimensions.popupHeight < dimensions.viewportBottom &&
            pos.left >= dimensions.viewportLeft &&
            pos.left + dimensions.popupWidth < dimensions.viewportRight;
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