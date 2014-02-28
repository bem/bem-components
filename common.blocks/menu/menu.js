/**
 * @module menu
 */

modules.define({ block : 'menu' }, ['dom', 'next-tick'], function(provide, dom, nextTick) {

/**
 * @exports
 * @class menu
 * @bem
 */
provide(/** @lends menu.prototype */{
    beforeSetMod : {
        'focused' : {
            'true' : function() {
                return !this.hasMod('disabled');
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._hoveredItem = null;
                this._items = null;

                this._focused = dom.containsFocus(this.domElem);
                this._focused?
                    // if control is already in focus, we need to set focused mod
                    this.setMod('focused') :
                    // if block already has focused mod, we need to focus control
                    this.hasMod('focused') && this._focus();

                this.hasMod('focused') && this.bindTo('keydown', this._onKeyDown);
            },

            '' : function() {
            }
        },

        'focused' : {
            'true' : function() {
                this.bindTo('keydown', this._onKeyDown);
                this._focused || this._focus();
            },

            '' : function() {
                this.unbindFrom('keydown', this._onKeyDown);
                this._focused && this._blur();
            }
        },

        'disabled' : function(modName, modVal) {
            this.attr('tabindex', modVal ? -1 : 0);
        }
    },

    _getItems : function() {
        return this._items || (this._items = this.findBlocksInside('menu-item'));
    },

    /**
     * Sets content
     * @param {String|jQuery} content
     * @returns {this}
     */
    setContent : function(content) {
        BEMDOM.update(this.domElem, content);
        this._hoveredItem = null;
        this._items = null;
        return this;
    },

    _onItemHover : function(item) {
        console.log('!!!!!!', item.hasMod('hovered'));
        if(item.hasMod('hovered')) {
            this._hoveredItem = item;
        } else if(this._hoveredItem === item) {
            this._hoveredItem = null;
        }
    },

    _onItemCheck : function() {
    },

    _onKeyDown : function(e) {
        var isArrow = e.keyCode === 38 || e.keyCode === 40;

        if(isArrow && !e.shiftKey) {
            e.preventDefault();

            var dir = e.keyCode - 39, // using the features of key codes for "up"/"down" ;-)
                items = this._getItems(),
                len = items.length,
                hoveredIdx = items.indexOf(this._hoveredItem),
                nextIdx = hoveredIdx,
                i = 0;

                console.log('start', this._hoveredItem, hoveredIdx, dir);
            do {
                nextIdx += dir;
                nextIdx = nextIdx < 0? len - 1 : nextIdx >= len? 0 : nextIdx;
                console.log('tick', i, nextIdx);
                if(++i === len) return; // if we have no next item to hover
            } while(items[nextIdx].hasMod('disabled'));

            console.log('finish', nextIdx);

            this._hoveredItem && this._hoveredItem.delMod('hovered');
            items[nextIdx].setMod('hovered');
        }
    },

    _onFocus : function() {
        this._focused = true;
        this.setMod('focused');
    },

    _onBlur : function() {
        this._focused = false;
        this.delMod('focused');
    },

    _focus : function() {
        this.domElem.focus();
    },

    _blur : function() {
        this.domElem.blur();
    }
}, /** @lends menu */{
    live : function() {
        this
            .liveInitOnBlockInsideEvent({ modName : 'hovered', modVal : '*' }, 'menu-item', function(e) {
                console.log('live hovered', arguments);
                console.log('item.hasMod', e.target.hasMod('hovered'));
                this._onItemHover(e.target);
            })
            .liveInitOnBlockInsideEvent({ modName : 'checked', modVal : true }, 'menu-item', function(e) {
                this._onItemCheck(e.target);
            })
            .liveBindTo('focusin', function() {
                this._onFocus();
            })
            .liveBindTo('focusout', function() {
                this._onBlur();
            });

        var focused = dom.getFocused();
        if(focused.hasClass(this.buildClass())) {
            var _this = this; // TODO: https://github.com/bem/bem-core/issues/425
            nextTick(function() {
                focused[0] === dom.getFocused()[0] && focused.bem(_this.getName());
            });
        }
    }
});

});
