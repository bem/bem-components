/**
 * @module menu
 */

modules.define(
    'menu',
    ['i-bem__dom', 'dom', 'next-tick', 'menu-item'],
    function(provide, BEMDOM, dom, nextTick) {

/**
 * @exports
 * @class menu
 * @bem
 */
provide(BEMDOM.decl(this.name, /** @lends menu.prototype */{
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

                this.hasMod('focused') && this.bindToDoc('keydown', this._onKeyDown);

                this._focused = dom.containsFocus(this.domElem);
                this._focused?
                    // if control is already in focus, we need to set focused mod
                    this.setMod('focused') :
                    // if block already has focused mod, we need to focus control
                    this.hasMod('focused') && this._focus();
            }
        },

        'focused' : {
            'true' : function() {
                this.bindToDoc('keydown', this._onKeyDown);
                this._focused || this._focus();
            },

            '' : function() {
                this.unbindFromDoc('keydown', this._onKeyDown);
                this._focused && this._blur();
                this._hoveredItem && this._hoveredItem.delMod('hovered');
            }
        },

        'disabled' : function(modName, modVal) {
            this.domElem.attr('tabindex', modVal? -1 : 0);
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
        if(item.hasMod('hovered')) {
            this._hoveredItem && this._hoveredItem.delMod('hovered');
            this._hoveredItem = item;
        } else if(this._hoveredItem === item) {
            this._hoveredItem = null;
        }
    },

    _onItemClick : function(item) {
        this.emit('item-click', item);
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

            do {
                nextIdx += dir;
                nextIdx = nextIdx < 0? len - 1 : nextIdx >= len? 0 : nextIdx;
                if(++i === len) return; // if we have no next item to hover
            } while(items[nextIdx].hasMod('disabled'));

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
                this._onItemHover(e.target);
            })
            .liveInitOnBlockInsideEvent('click', 'menu-item', function(e) {
                this._onItemClick(e.target);
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
}));

});
