/**
 * @module popup
 */

modules.define(
    'popup',
    ['i-bem__dom', 'jquery', 'dom', 'functions', 'functions__throttle'],
    function(provide, BEMDOM, $, dom, functions, throttle) {

var VIEWPORT_ACCURACY_FACTOR = 0.99,
    DEFAULT_OFFSETS = [5, 0],
    DEFAULT_DIRECTIONS = [
        'bottom-left', 'bottom-center', 'bottom-right',
        'top-left', 'top-center', 'top-right',
        'right-top', 'right-center', 'right-bottom',
        'left-top', 'left-center', 'left-bottom'
    ],
    BASE_ZINDEX = 10000,
    CHECK_OWNER_THROTTLING_INTERVAL = 100,

    win = BEMDOM.win,
    docNode = BEMDOM.doc[0];

/**
 * @exports
 * @class popup
 * @bem
 *
 * @param {Array[Number]} [offsets] two-elements array with main and secondary offsets
 * @param {Array[String]} [directions] allowed directions
 *
 * @bemmod visible Represents visible state
 */
provide(BEMDOM.decl(this.name, /** @lends popup.prototype */{
    beforeSetMod : {
        'visible' : {
            'true' : function() {
                if(!this._owner && !this._pos)
                    throw Error('Can\'t show popup without target');
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._parentPopup = null;
                this._owner = null;
                this._ownerParents = null;
                this._popupOwner = null;
                this._pos = null;
                this._zIndex = null;
                this._isAttachedToScope = false;
                this._isOwnerVisible = false;
                this._checkOwnerVisibility = docNode.elementFromPoint?
                    throttle(
                        this._checkOwnerVisibility,
                        CHECK_OWNER_THROTTLING_INTERVAL,
                        false,
                        this) :
                    functions.noop;
            },

            '' : function() {
                this
                    ._unbindFromPopupOwner()
                    .delMod('visible');
            }
        },

        'visible' : {
            'true' : function() {
                this._zIndex = captureZIndex();
                this._owner && this._updateIsOwnerVisible();

                this
                    .bindTo('pointerclick', this._onPointerClick)
                    ._bindToParentPopup()
                    ._bindToScrollAndResize()
                    .redraw();
            },

            '' : function() {
                releaseZIndex(this._zIndex);
                this
                    .unbindFrom('pointerclick', this._onPointerClick)
                    ._unbindFromParentPopup()
                    ._unbindFromScrollAndResize();
            }
        }
    },

    /**
     * Sets target
     * @param {Number|jQuery|BEMDOM} left x-coordinate or owner DOM elem or owner BEMDOM block
     * @param {Number} [top] y-coordinate
     * @returns {this}
     */
    setTarget : function(left, top) {
        this
            ._unbindFromScrollAndResize()
            ._unbindFromParentPopup()
            ._unbindFromPopupOwner();

        if(arguments.length === 1) {
            this._owner = left instanceof BEMDOM?
                    left.domElem :
                    left instanceof $?
                        left : null;
            if(!this._owner) throw Error('Invalid arguments');
            this._pos = null;

            var blockName = this.__self.getName();
            this._parentPopup = this.findBlockOutside(this._owner, blockName);
            this._popupOwner = this._owner.bem('_' + blockName + '-owner');
            this._bindToPopupOwner();

            this.hasMod('visible') && this
                ._bindToScrollAndResize()
                .redraw();
        } else {
            this._pos = { left : left, top : top };
            this._parentPopup = null;
            this._owner = null;
            this._popupOwner = null;
        }

        return this;
    },

    /**
     * Sets content
     * @param {String|jQuery} content
     * @returns {this}
     */
    setContent : function(content) {
        BEMDOM.update(this.domElem, content);
        return this.redraw();
    },

    /**
     * Redraws popup
     * @returns {this}
     */
    redraw : function() {
        if(!this.hasMod('visible')) return this;

        if(!this._isAttachedToScope) {
            BEMDOM.scope.append(this.domElem);
            this._isAttachedToScope = true;
        }

        var bestDrawingParams = this._calcBestDrawingParams();

        this
            .setMod('direction', bestDrawingParams.direction)
            .domElem.css({
                left : bestDrawingParams.left,
                top : bestDrawingParams.top,
                display : !this._owner || this._isOwnerVisible? '' : 'none',
                zIndex : this._zIndex
            });

        return this;
    },

    _calcBestDrawingParams : function() {
        var dimensions = this._calcDimensions(),
            directions = this.params.directions,
            i = 0,
            direction,
            pos,
            viewportFactor,
            bestDirection,
            bestPos,
            bestViewportFactor;

        while(direction = directions[i++]) {
            pos = this._calcPos(direction, dimensions);
            viewportFactor = this._calcViewportFactor(pos, dimensions);
            if(i === 1 || viewportFactor > bestViewportFactor) {
                bestDirection = direction;
                bestViewportFactor = viewportFactor;
                bestPos = pos;
            }
            if(bestViewportFactor > VIEWPORT_ACCURACY_FACTOR) break;
        }

        return {
            direction : bestDirection,
            left : bestPos.left,
            top : bestPos.top
        };
    },

    _calcDimensions : function() {
        var pos = this._pos,
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
            offsets = this.params.offsets,
            owner = dimensions.owner,
            popup = dimensions.popup;

        if(checkMainDirection(direction, 'bottom')) {
            res.top = owner.top + owner.height + offsets[0];
        } else if(checkMainDirection(direction, 'top')) {
            res.top = owner.top - popup.height - offsets[0];
        } else if(checkMainDirection(direction, 'left')) {
            res.left = owner.left - popup.width - offsets[0];
        } else if(checkMainDirection(direction, 'right')) {
            res.left = owner.left + owner.width + offsets[0];
        }

        if(checkSecondaryDirection(direction, 'right')) {
            res.left = owner.left + owner.width - popup.width - offsets[1];
        } else if(checkSecondaryDirection(direction, 'left')) {
            res.left = owner.left + offsets[1];
        } else if(checkSecondaryDirection(direction, 'bottom')) {
            res.top = owner.top + owner.height - popup.height - offsets[1];
        } else if(checkSecondaryDirection(direction, 'top')) {
            res.top = owner.top + offsets[1];
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

    _bindToScrollAndResize : function() {
        this._owner && this
            .bindTo(this._ownerParents = this._owner.parents(), 'scroll', this._onScrollOrResize)
            .bindToWin('scroll resize', this._onScrollOrResize);

        return this;
    },

    _unbindFromScrollAndResize : function() {
        this._ownerParents && (this
            .unbindFrom(this._ownerParents, 'scroll', this._onScrollOrResize)
            .unbindFromWin('scroll resize', this._onScrollOrResize)
            ._ownerParents = null);

        return this;
    },

    _onScrollOrResize : function() {
        this._checkOwnerVisibility();
        this.redraw();
    },

    _checkOwnerVisibility : function() {
        // NOTE: because block might be destructed during throttling
        this.hasMod('js', 'inited') &&
            this.hasMod('visible') &&
            this._updateIsOwnerVisible() &&
            this.domElem.css({ display : this._isOwnerVisible? '' : 'none' });
    },

    /**
     * Updates owner visibility state
     * @private
     * @returns {Boolean} Whether state was updated
     */
    _updateIsOwnerVisible : function() {
        var owner = this._owner,
            ownerOffset = owner.offset(),
            elemFromPoint = $(docNode.elementFromPoint(
                ownerOffset.left - win.scrollLeft() + owner.outerWidth() / 2,
                ownerOffset.top - win.scrollTop() + owner.outerHeight() / 2)),
            prevIsOwnerVisible = this._isOwnerVisible;

        this._isOwnerVisible = dom.contains(owner, elemFromPoint);

        return prevIsOwnerVisible !== this._isOwnerVisible;
    },

    _onPointerClick : function() {
        var curPopup = this;
        do {
            curPopup._inPopupPointerClick = true;
        } while(curPopup = curPopup._parentPopup);
    },

    _bindToParentPopup : function() {
        this._parentPopup &&
            this._parentPopup.on({ modName : 'visible', modVal : '' }, this._onParentPopupHide, this);
        return this;
    },

    _unbindFromParentPopup : function() {
        this._parentPopup &&
            this._parentPopup.un({ modName : 'visible', modVal : '' }, this._onParentPopupHide, this);
        return this;
    },

    _onParentPopupHide : function() {
        this.delMod('visible');
    },

    _bindToPopupOwner : function() {
        this._popupOwner &&
            this._popupOwner.on({ modName : 'js', modVal : '' }, this._onPopupOwnerDestruct, this);
        return this;
    },

    _unbindFromPopupOwner : function() {
        this._popupOwner &&
            this._popupOwner.un({ modName : 'js', modVal : '' }, this._onPopupOwnerDestruct, this);
        return this;
    },

    _onPopupOwnerDestruct : function() {
        BEMDOM.destruct(this.domElem);
    },

    getDefaultParams : function() {
        return {
            offsets : DEFAULT_OFFSETS,
            directions : DEFAULT_DIRECTIONS
        };
    }
}, /** @lends popup */{
    live : true
}));

var visiblePopupsZIndexes = [BASE_ZINDEX];

function captureZIndex() {
    return visiblePopupsZIndexes[
        visiblePopupsZIndexes.push(visiblePopupsZIndexes[visiblePopupsZIndexes.length - 1] + 1) - 1];
}

function releaseZIndex(zIndex) {
    visiblePopupsZIndexes.splice(visiblePopupsZIndexes.indexOf(zIndex), 1);
}

function checkMainDirection(direction, mainDirection1, mainDirection2) {
    return !direction.indexOf(mainDirection1) || (mainDirection2 && !direction.indexOf(mainDirection2));
}

function checkSecondaryDirection(direction, secondaryDirection) {
    return ~direction.indexOf('-' + secondaryDirection);
}

});
