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
            popup : {
                width : popupWidth,
                height : popupHeight,
                area : popupWidth * popupHeight
            },

            owner : {
                left : ownerPos.left,
                top : ownerPos.top,
                width : pos? 0 : owner.outerWidth(),
                height : pos? 0 : owner.outerHeight()
            },

            viewport : {
                top : winTop,
                left : winLeft,
                bottom : winTop + winHeight,
                right : winLeft + winWidth
            }
        };
    },

    _calcPos : function(direction, dimensions) {
        var res = {},
            offset = this.params.offset,
            owner = dimensions.owner,
            popup = dimensions.popup;

        if(checkMainDirection(direction, 'bottom')) {
            res.top = owner.top + owner.height + offset;
        } else if(checkMainDirection(direction, 'top')) {
            res.top = owner.top - popup.height - offset;
        } else if(checkMainDirection(direction, 'left')) {
            res.left = owner.left - popup.width - offset;
        } else if(checkMainDirection(direction, 'right')) {
            res.left = owner.left + owner.width + offset;
        }

        if(checkSecondaryDirection(direction, 'right')) {
            res.left = owner.left + owner.width - popup.width;
        } else if(checkSecondaryDirection(direction, 'left')) {
            res.left = owner.left;
        } else if(checkSecondaryDirection(direction, 'bottom')) {
            res.top = owner.top + owner.height - popup.height;
        } else if(checkSecondaryDirection(direction, 'top')) {
            res.top = owner.top;
        } else if(checkSecondaryDirection(direction, 'center')) {
            if(checkMainDirection(direction, 'top', 'bottom')) {
                res.left = owner.left + owner.width / 2 - popup.width / 2;
            } else if(checkMainDirection(direction, 'left', 'right')) {
                res.top = owner.top + owner.height / 2 - popup.height / 2;
            }
        }

        return res;
    },

    _calcViewportFactor : function(pos, dimensions) {
        var viewport = dimensions.viewport,
            popup = dimensions.popup,
            intersectionLeft = Math.max(pos.left, viewport.left),
            intersectionRight = Math.min(pos.left + popup.width, viewport.right),
            intersectionTop = Math.max(pos.top, viewport.top),
            intersectionBottom = Math.min(pos.top + popup.height, viewport.bottom);

        return intersectionLeft < intersectionRight && intersectionTop < intersectionBottom? // has intersection
            (intersectionRight - intersectionLeft) *
                (intersectionBottom - intersectionTop) /
                popup.area :
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

function checkMainDirection(direction, mainDirection1, mainDirection2) {
    return !direction.indexOf(mainDirection1) || (mainDirection2 && !direction.indexOf(mainDirection2));
}

function checkSecondaryDirection(direction, secondaryDirection) {
    return ~direction.indexOf('-' + secondaryDirection);
}

});
