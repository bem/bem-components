/**
 * @module menu
 */

modules.define(
    'menu',
    ['i-bem__dom', 'base-control', 'keyboard__codes', 'menu-item'],
    function(provide, BEMDOM, BaseControl, keyCodes) {

/**
 * @exports
 * @class menu
 * @augments base-control
 * @bem
 */
provide(BEMDOM.decl({ block : this.name, baseBlock : BaseControl }, /** @lends menu.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._hoveredItem = null;
                this._items = null;

                this.hasMod('focused') && this.bindToDoc('keydown', this._onKeyDown);
            }
        },

        'focused' : {
            'true' : function() {
                this.__base.apply(this, arguments);
                this.bindToDoc('keydown', this._onKeyDown); // NOTE: should be called after __base
            },

            '' : function() {
                this
                    .unbindFromDoc('keydown', this._onKeyDown)
                    .__base.apply(this, arguments);
                this._hoveredItem && this._hoveredItem.delMod('hovered');
            }
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
        var keyCode = e.keyCode,
            isArrow = keyCode === keyCodes.UP || keyCode === keyCodes.DOWN;

        if(isArrow && !e.shiftKey) {
            e.preventDefault();

            var dir = keyCode - 39, // using the features of key codes for "up"/"down" ;-)
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
    }
}, /** @lends menu */{
    live : function() {
        this
            .liveInitOnBlockInsideEvent({ modName : 'hovered', modVal : '*' }, 'menu-item', function(e) {
                this._onItemHover(e.target);
            })
            .liveInitOnBlockInsideEvent('click', 'menu-item', function(e) {
                this._onItemClick(e.target);
            });

        return this.__base.apply(this, arguments);
    }
}));

});
