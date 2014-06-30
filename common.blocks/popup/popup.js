/**
 * @module popup
 */

modules.define(
    'popup',
    ['i-bem__dom', 'jquery', 'dom', 'objects', 'functions__throttle'],
    function(provide, BEMDOM, $, dom, objects, throttle) {

var VIEWPORT_ACCURACY_FACTOR = 0.99,
    DEFAULT_DIRECTIONS = [
        'bottom-left', 'bottom-center', 'bottom-right',
        'top-left', 'top-center', 'top-right',
        'right-top', 'right-center', 'right-bottom',
        'left-top', 'left-center', 'left-bottom'
    ],
    BASE_ZINDEX = 10000,
    UPDATE_TARGET_VISIBILITY_THROTTLING_INTERVAL = 100,

    win = BEMDOM.win,
    undef;

/**
 * @exports
 * @class popup
 * @bem
 *
 * @param {Number} [mainOffset=0] offset along the main direction
 * @param {Number} [secondaryOffset=0] offset along the secondary direction
 * @param {Number} [viewportOffset=0] offset from the viewport (window)
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
                this._isTargetVisible = undef;
                this._lastDrawingCss = {
                        left : undef,
                        top : undef,
                        zIndex : undef,
                        display : undef
                    };
                this._updateIsTargetVisible = throttle(
                    this._updateIsTargetVisible,
                    UPDATE_TARGET_VISIBILITY_THROTTLING_INTERVAL,
                    false,
                    this);
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
                this._owner && (this._ownerParents = this._owner.parents());

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

                if(this._owner) {
                    this._ownerParents = null;
                    this._isTargetVisible = undef;
                }
            }
        }
    },

    /**
     * Sets target
     * @param {Number|jQuery|BEMDOM} left x-coordinate or owner DOM elem or owner BEMDOM block
     * @param {Number} [top] y-coordinate
     * @returns {popup} this
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
            this._popupOwner = this._owner.bem('_' + this.__self.getName() + '-owner');
            this._isTargetVisible = undef;

            this._bindToPopupOwner();

            if(this.hasMod('visible')){
                this._ownerParents = this._owner.parents();
                this
                    ._bindToScrollAndResize()
                    .redraw();
            } else {
                this._ownerParents = null;
            }
        } else {
            this._pos = { left : left, top : top };
            this._parentPopup = null;
            this._owner = null;
            this._ownerParents = null;
            this._popupOwner = null;
            this._isTargetVisible = true;
        }

        return this;
    },

    /**
     * Sets content
     * @param {String|jQuery} content
     * @returns {popup} this
     */
    setContent : function(content) {
        BEMDOM.update(this.domElem, content);
        return this.redraw();
    },

    /**
     * Redraws popup
     * @returns {popup} this
     */
    redraw : function() {
        if(!this.hasMod('visible')) return this;

        if(!this._isAttachedToScope) {
            BEMDOM.scope.append(this.domElem);
            this._isAttachedToScope = true;
        }

        var bestDrawingParams = this._calcBestDrawingParams();

        this.setMod('direction', bestDrawingParams.direction);

        typeof this._isTargetVisible === 'undefined' &&
            (this._isTargetVisible = this._calcIsTargetVisible());

        var lastDrawingCss = this._lastDrawingCss,
            needUpdateCss = false;

        objects.each(
            {
                display : this._isTargetVisible? '' : 'none',
                left : bestDrawingParams.left,
                top : bestDrawingParams.top,
                zIndex : this._zIndex
            },
            function(val, name) {
                if(lastDrawingCss[name] !== val) {
                    lastDrawingCss[name] = val;
                    needUpdateCss = true;
                }
            });

        needUpdateCss && this.domElem.css(lastDrawingCss);

        return this;
    },

    /**
     * Returns possible directions to draw with max available width and height.
     * @returns {Array}
     */
    calcPossibleDrawingParams : function() {
        var owner = this._calcOwnerDimensions(),
            viewport = this._calcViewportDimensions(),
            params = this.params,
            mainOffset = params.mainOffset,
            secondaryOffset = params.secondaryOffset,
            viewportOffset = params.viewportOffset;

        return this.params.directions.map(function(direction) {
            var subRes = {
                    direction : direction,
                    width : 0,
                    height : 0,
                    left : 0,
                    top : 0
                };

            if(checkMainDirection(direction, 'bottom')) {
                subRes.top = owner.top + owner.height + mainOffset;
                subRes.height = viewport.bottom - subRes.top - viewportOffset;
            } else if(checkMainDirection(direction, 'top')) {
                subRes.height = owner.top - viewport.top - mainOffset - viewportOffset;
                subRes.top = owner.top - subRes.height - mainOffset;
            } else {
                if(checkSecondaryDirection(direction, 'center')) {
                    subRes.height = viewport.bottom - viewport.top - 2 * viewportOffset;
                    subRes.top = owner.top + owner.height / 2 - subRes.height / 2;
                } else if(checkSecondaryDirection(direction, 'bottom')) {
                    subRes.height = owner.top + owner.height - viewport.top - secondaryOffset - viewportOffset;
                    subRes.top = owner.top + owner.height - subRes.height - secondaryOffset;
                } else if(checkSecondaryDirection(direction, 'top')) {
                    subRes.top = owner.top + secondaryOffset;
                    subRes.height = viewport.bottom - subRes.top - viewportOffset;
                }

                if(checkMainDirection(direction, 'left')) {
                    subRes.width = owner.left - viewport.left - mainOffset - viewportOffset;
                    subRes.left = owner.left - subRes.width - mainOffset;
                } else {
                    subRes.left = owner.left + owner.width + mainOffset;
                    subRes.width = viewport.right - subRes.left - viewportOffset;
                }
            }

            if(checkSecondaryDirection(direction, 'right')) {
                subRes.width = owner.left + owner.width - viewport.left - secondaryOffset - viewportOffset;
                subRes.left = owner.left + owner.width - subRes.width - secondaryOffset;
            } else if(checkSecondaryDirection(direction, 'left')) {
                subRes.left = owner.left + secondaryOffset;
                subRes.width = viewport.right - subRes.left - viewportOffset;
            } else if(checkSecondaryDirection(direction, 'center')) {
                if(checkMainDirection(direction, 'top', 'bottom')) {
                    subRes.width = viewport.right - viewport.left - 2 * viewportOffset;
                    subRes.left = owner.left + owner.width / 2 - subRes.width / 2;
                }
            }

            return subRes;
        }, this);
    },

    _calcBestDrawingParams : function() {
        var popup = this._calcPopupDimensions(),
            owner = this._calcOwnerDimensions(),
            viewport = this._calcViewportDimensions(),
            directions = this.params.directions,
            i = 0,
            direction,
            pos,
            viewportFactor,
            bestDirection,
            bestPos,
            bestViewportFactor;

        while(direction = directions[i++]) {
            pos = this._calcPos(direction, owner, popup);
            viewportFactor = this._calcViewportFactor(pos, viewport, popup);
            if(i === 1 ||
                    viewportFactor > bestViewportFactor ||
                    (!bestViewportFactor && this.hasMod('direction', direction))) {
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

    _calcPopupDimensions : function() {
        var popupWidth = this.domElem.outerWidth(),
            popupHeight = this.domElem.outerHeight();

        return {
            width : popupWidth,
            height : popupHeight,
            area : popupWidth * popupHeight
        };
    },

    _calcOwnerDimensions : function() {
        var pos = this._pos,
            owner = this._owner,
            ownerPos = pos? pos : owner.offset();

        return {
            left : ownerPos.left,
            top : ownerPos.top,
            width : pos? 0 : owner.outerWidth(),
            height : pos? 0 : owner.outerHeight()
        };
    },

    _calcViewportDimensions : function() {
        var winTop = win.scrollTop(),
            winLeft = win.scrollLeft(),
            winWidth = win.width(),
            winHeight = win.height();

        return {
            top : winTop,
            left : winLeft,
            bottom : winTop + winHeight,
            right : winLeft + winWidth
        };
    },

    _calcPos : function(direction, owner, popup) {
        var res = {},
            mainOffset = this.params.mainOffset,
            secondaryOffset = this.params.secondaryOffset;

        if(checkMainDirection(direction, 'bottom')) {
            res.top = owner.top + owner.height + mainOffset;
        } else if(checkMainDirection(direction, 'top')) {
            res.top = owner.top - popup.height - mainOffset;
        } else if(checkMainDirection(direction, 'left')) {
            res.left = owner.left - popup.width - mainOffset;
        } else if(checkMainDirection(direction, 'right')) {
            res.left = owner.left + owner.width + mainOffset;
        }

        if(checkSecondaryDirection(direction, 'right')) {
            res.left = owner.left + owner.width - popup.width - secondaryOffset;
        } else if(checkSecondaryDirection(direction, 'left')) {
            res.left = owner.left + secondaryOffset;
        } else if(checkSecondaryDirection(direction, 'bottom')) {
            res.top = owner.top + owner.height - popup.height - secondaryOffset;
        } else if(checkSecondaryDirection(direction, 'top')) {
            res.top = owner.top + secondaryOffset;
        } else if(checkSecondaryDirection(direction, 'center')) {
            if(checkMainDirection(direction, 'top', 'bottom')) {
                res.left = owner.left + owner.width / 2 - popup.width / 2;
            } else if(checkMainDirection(direction, 'left', 'right')) {
                res.top = owner.top + owner.height / 2 - popup.height / 2;
            }
        }

        return res;
    },

    _calcViewportFactor : function(pos, viewport, popup) {
        var viewportOffset = this.params.viewportOffset,
            intersectionLeft = Math.max(pos.left, viewport.left + viewportOffset),
            intersectionRight = Math.min(pos.left + popup.width, viewport.right - viewportOffset),
            intersectionTop = Math.max(pos.top, viewport.top + viewportOffset),
            intersectionBottom = Math.min(pos.top + popup.height, viewport.bottom - viewportOffset);

        return intersectionLeft < intersectionRight && intersectionTop < intersectionBottom? // has intersection
            (intersectionRight - intersectionLeft) *
                (intersectionBottom - intersectionTop) /
                popup.area :
            0;
    },

    /**
     * Calculates target visibility state
     * @private
     * @returns {Boolean} Whether state is visible
     */
    _calcIsTargetVisible : function() {
        var owner = this._owner;
        if(!owner) return true;

        var ownerOffset = owner.offset(),
            ownerLeft = ownerOffset.left,
            ownerTop = ownerOffset.top,
            ownerRight = ownerLeft + owner.outerWidth(),
            ownerBottom = ownerTop + owner.outerHeight(),
            direction = this.getMod('direction'),
            vertBorder = Math.floor(checkMainDirection(direction, 'top') ||
                    checkSecondaryDirection(direction, 'top')?
                ownerTop :
                ownerBottom),
            horizBorder = Math.floor(checkMainDirection(direction, 'left') ||
                    checkSecondaryDirection(direction, 'left')?
                ownerLeft :
                ownerRight),
            res = true;

        this._ownerParents.each(function() {
            if(this.tagName === 'BODY') return false;

            var parent = $(this),
                overflowY = parent.css('overflow-y'),
                checkOverflowY = overflowY === 'scroll' || overflowY === 'hidden' || overflowY === 'auto',
                overflowX = parent.css('overflow-x'),
                checkOverflowX = overflowX === 'scroll' || overflowX === 'hidden' || overflowX === 'auto';

            if(checkOverflowY || checkOverflowX) {
                var parentOffset = parent.offset();

                if(checkOverflowY) {
                    var parentTopOffset = Math.floor(parentOffset.top);
                    if(vertBorder < parentTopOffset || parentTopOffset + parent.outerHeight() < vertBorder) {
                        return res = false;
                    }
                }

                if(checkOverflowX) {
                    var parentLeftOffset = Math.floor(parentOffset.left);
                    return res = !(
                        horizBorder < parentLeftOffset ||
                        parentLeftOffset + parent.outerWidth() < horizBorder);
                }
            }
        });

        return res;
    },

    _bindToScrollAndResize : function() {
        this._ownerParents &&
            this
                .bindTo(this._ownerParents, 'scroll', this._onScrollOrResize)
                .bindToWin('scroll resize', this._onScrollOrResize);

        return this;
    },

    _unbindFromScrollAndResize : function() {
        this._ownerParents &&
            this
                .unbindFrom(this._ownerParents, 'scroll', this._onScrollOrResize)
                .unbindFromWin('scroll resize', this._onScrollOrResize);

        return this;
    },

    _onScrollOrResize : function() {
        this
            .redraw()
            ._updateIsTargetVisible();
    },

    _updateIsTargetVisible : function() {
        if(!this.hasMod('js', 'inited') || !this.hasMod('visible'))
            return;

        var isTargetVisible = this._calcIsTargetVisible();
        if(isTargetVisible !== this._isTargetVisible) {
            this._isTargetVisible = isTargetVisible;
            this.redraw();
        }
    },

    _onPointerClick : function() {
        var curPopup = this;
        do {
            curPopup._inPopupPointerClick = true;
        } while(curPopup = curPopup._parentPopup);
    },

    _bindToParentPopup : function() {
        this._owner &&
            (this._parentPopup = this.findBlockOutside(this._owner, this.__self.getName())) &&
            this._parentPopup.on({ modName : 'visible', modVal : '' }, this._onParentPopupHide, this);

        return this;
    },

    _unbindFromParentPopup : function() {
        if(this._parentPopup) {
            this._parentPopup.un({ modName : 'visible', modVal : '' }, this._onParentPopupHide, this);
            this._parentPopup = null;
        }

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
            mainOffset : 0,
            secondaryOffset : 0,
            viewportOffset : 0,
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
