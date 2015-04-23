/**
 * @module select
 */

modules.define(
    'select',
    ['i-bem__dom', 'popup', 'menu', 'menu-item', 'button', 'jquery', 'dom', 'keyboard__codes', 'strings__escape'],
    function(provide, BEMDOM, Popup, Menu, MenuItem, Button, $, dom, keyCodes, escape) {

/**
 * @exports
 * @class select
 * @bem
 *
 * @bemmod opened Represents opened state
 */
provide(BEMDOM.decl(this.name, /** @lends select.prototype */{
    beforeSetMod : {
        'opened' : {
            'true' : function() {
                return !this.hasMod('disabled');
            }
        },

        'focused' : {
            '' : function() {
                return !this._isPointerPressInProgress;
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._button = this.findBlockInside('button')
                    .on('click', this._onButtonClick, this);

                this._popup = this.findBlockInside('popup')
                    .setAnchor(this._button)
                    .on({ modName : 'visible', modVal : '' }, this._onPopupHide, this);

                this._menu = this._popup.findBlockInside('menu')
                    .on({
                        'change' : this._onMenuChange,
                        'item-click' : this._onMenuItemClick,
                        'item-hover' : this._onMenuItemHover
                    }, this);

                this._isPointerPressInProgress = false;
                this._buttonWidth = null;

                this.hasMod('focused') && this._focus();
            }
        },

        'focused' : {
            'true' : function() {
                this._focus();
            },

            '' : function() {
                this._blur();
            }
        },

        'opened' : {
            '*' : function(_, modVal) {
                this._menu.setMod('focused', modVal);
            },

            'true' : function() {
                this._buttonWidth === null && this._updateMenuWidth();

                this._updateMenuHeight();
                this._popup.setMod('visible');
                this
                    .bindToDoc('pointerpress', this._onDocPointerPress)
                    .setMod('focused')
                    ._hoverCheckedOrFirstItem();
            },

            '' : function() {
                this
                    .unbindFromDoc('pointerpress', this._onDocPointerPress)
                    ._popup.delMod('visible');
            }
        },

        'disabled' : {
            '*' : function(modName, modVal) {
                this._button.setMod(modName, modVal);
                this._menu.setMod(modName, modVal);
            },

            'true' : function() {
                this.elem('control').attr('disabled', true);
                this._popup.delMod('visible');
            },

            '' : function() {
                this.elem('control').removeAttr('disabled');
            }
        }
    },

    /**
     * Get value
     * @returns {*}
     */
    getVal : function() {
        return this._menu.getVal();
    },

    /**
     * Set value
     * @param {*} val
     * @returns {select} this
     */
    setVal : function(val) {
        this._menu.setVal(val);
        return this;
    },

    /**
     * Get name
     * @returns {String}
     */
    getName : function() {
        return this.params.name;
    },

    getDefaultParams : function() {
        return {
            optionsMaxHeight : Number.POSITIVE_INFINITY
        };
    },

    _focus : function() {
        this
            .bindTo('button', {
                keydown : this._onKeyDown,
                keypress : this._onKeyPress
            })
            ._button.setMod('focused');
    },

    _blur : function() {
        this
            .unbindFrom('button', {
                keydown : this._onKeyDown,
                keypress : this._onKeyPress
            })
            .delMod('opened')
            ._button
                .delMod('focused');
    },

    _updateMenuWidth : function() {
        this._menu.domElem.css('min-width', this._buttonWidth = this._button.domElem.outerWidth());

        this._popup.redraw();
    },

    _updateMenuHeight : function() {
        var drawingParams = this._popup.calcPossibleDrawingParams(),
            menuDomElem = this._menu.domElem,
            menuWidth = menuDomElem.outerWidth(),
            bestHeight = 0;

        drawingParams.forEach(function(params) {
            params.width >= menuWidth && params.height > bestHeight && (bestHeight = params.height);
        });

        bestHeight && menuDomElem.css('max-height', Math.min(this.params.optionsMaxHeight, bestHeight));
    },

    _getCheckedItems : function() {
        return this._menu.getItems().filter(function(item) {
            return item.hasMod('checked');
        });
    },

    _hoverCheckedOrFirstItem : function() { // NOTE: may be it should be moved to menu
        (this._getCheckedItems()[0] || this._menu.getItems()[0])
            .setMod('hovered');
    },

    _onKeyDown : function(e) {
        if(this.hasMod('opened')) {
            if(e.keyCode === keyCodes.ESC) {
                // NOTE: stop propagation to prevent from being listened by global handlers
                e.stopPropagation();
                this.delMod('opened');
            }
        } else if((e.keyCode === keyCodes.UP || e.keyCode === keyCodes.DOWN) && !e.shiftKey) {
            e.preventDefault();
            this.setMod('opened');
        }
    },

    _onKeyPress : function(e) {
        // press a key: closed select - set value, opened select - set hover on menu-item.
        if(!this.hasMod('opened')) {
            var item = this._menu.searchItemByKeyboardEvent(e);
            item && this._setSingleVal(item.getVal());
        }
    },

    _setSingleVal : function(value) {
        this.setVal(value);
    },

    _onMenuChange : function() {
        this._updateControl();
        this._updateButton();

        this.hasMod('opened')?
            this._updateMenuWidth() :
            this._buttonWidth = null;

        this.emit('change');
    },

    _onMenuItemClick : function() {},

    _onMenuItemHover : function(e, data) {
        var item = data.item;
        item.hasMod('hovered')?
            this._button.domElem.attr('aria-activedescendant', item.domElem.attr('id')) :
            this._button.domElem.removeAttr('aria-activedescendant');
    },

    _updateControl : function() {},

    _updateButton : function() {},

    _onButtonClick : function() {
        this.toggleMod('opened');
    },

    _onButtonFocusChange : function(e, data) {
        this.setMod('focused', data.modVal);
    },

    _onPopupHide : function() {
        this.delMod('opened');
    },

    _onDocPointerPress : function(e) {
        if(this._isEventInPopup(e)) {
            e.pointerType === 'mouse' && e.preventDefault(); // prevents button blur in most desktop browsers
            this._isPointerPressInProgress = true;
            this.bindToDoc(
                'pointerrelease',
                { focusedHardMod : this._button.getMod('focused-hard') },
                this._onDocPointerRelease);
        }
    },

    _onDocPointerRelease : function(e) {
        this._isPointerPressInProgress = false;
        this
            .unbindFromDoc('pointerrelease', this._onDocPointerRelease)
            ._button
                .toggleMod('focused', true, '', this._isEventInPopup(e))
                .setMod('focused-hard', e.data.focusedHardMod);
    },

    _isEventInPopup : function(e) {
        return dom.contains(this._popup.domElem, $(e.target));
    }
}, /** @lends select */{
    live : function() {
        this.liveInitOnBlockInsideEvent(
            { modName : 'focused', modVal : '*' },
            'button',
            this.prototype._onButtonFocusChange);
    },

    _createControlHTML : function(name, val) {
        // Using string concatenation to not depend on template engines
        return '<input ' +
            'type="hidden" ' +
            'name="' + name + '" ' +
            'class="' + this.buildClass('control') + '" ' +
            'value="' + escape.attr(val) + '"/>';
    }
}));

});
