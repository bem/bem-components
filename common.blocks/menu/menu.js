/**
 * @module menu
 */

modules.define(
    'menu',
    ['i-bem-dom', 'control', 'keyboard__codes', 'menu__item'],
    function(provide, bemDom, Control, keyCodes, MenuItem) {

/** @const Number */
var TIMEOUT_KEYBOARD_SEARCH = 1500;

/**
 * @exports
 * @class menu
 * @augments control
 * @bem
 */
provide(bemDom.declBlock(this.name, Control, /** @lends menu.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                this._hoveredItem = null;
                this._items = null;

                this._lastTyping = {
                    char : '',
                    text : '',
                    index : 0,
                    time : 0
                };
            }
        },

        'disabled' : {
            '*' : function(modName, modVal) {
                this.__base.apply(this, arguments);
                this.getItems().setMod(modName, modVal);
            },
            'true' : function() {
                this.__base.apply(this, arguments);
                this.domElem.attr('aria-disabled', true);
            },
            '' : function() {
                this.__base.apply(this, arguments);
                this.domElem.removeAttr('aria-disabled');
            }
        }
    },

    /**
     * Returns items
     * @returns {menu__item[]}
     */
    getItems : function() {
        return this._items || (this._items = this.findChildElems('item'));
    },

    /**
     * Sets content
     * @param {String|jQuery} content
     * @returns {menu} this
     */
    setContent : function(content) {
        bemDom.update(this.domElem, content);
        this._hoveredItem = null;
        this._items = null;
        return this;
    },

    /**
     * Search menu item by keyboard event
     * @param {jQuery.Event} e
     * @returns {menu__item}
     */
    searchItemByKeyboardEvent : function(e) {
        var currentTime = +new Date(),
            charCode = e.charCode,
            char = String.fromCharCode(charCode).toLowerCase(),
            lastTyping = this._lastTyping,
            index = lastTyping.index,
            isSameChar = char === lastTyping.char && lastTyping.text.length === 1,
            items = this.getItems();

        if(charCode <= keyCodes.SPACE || e.ctrlKey || e.altKey || e.metaKey) {
            lastTyping.time = currentTime;
            return null;
        }

        if(currentTime - lastTyping.time > TIMEOUT_KEYBOARD_SEARCH || isSameChar) {
            lastTyping.text = char;
        } else {
            lastTyping.text += char;
        }

        lastTyping.char = char;
        lastTyping.time = currentTime;

        // If key is pressed again, then continue to search to next menu item
        if(isSameChar && items.get(index).getText().search(lastTyping.char) === 0) {
            index = index >= items.size() - 1? 0 : index + 1;
        }

        // 2 passes: from index to items.size() and from 0 to index.
        var i = index, len = items.size();
        while(i < len) {
            if(this._doesItemMatchText(items.get(i), lastTyping.text)) {
                lastTyping.index = i;
                return items.get(i);
            }

            i++;

            if(i === items.size()) {
                i = 0;
                len = index;
            }
        }

        return null;
    },

    /** @override **/
    _onFocus : function() {
        this.__base.apply(this, arguments);
        this._domEvents(bemDom.doc) // NOTE: should be called after __base
            .on('keydown', this._onKeyDown)
            .on('keypress', this._onKeyPress);
    },

    /** @override **/
    _onBlur : function() {
        this._domEvents(bemDom.doc)
            .un('keydown', this._onKeyDown)
            .un('keypress', this._onKeyPress);

        this.__base.apply(this, arguments);
        this._hoveredItem && this._hoveredItem.delMod('hovered');
    },

    /**
     * @param {Object} item
     * @private
     */
    _onItemHover : function(item) {
        if(item.hasMod('hovered')) {
            this._hoveredItem && this._hoveredItem.delMod('hovered');
            this._scrollToItem(this._hoveredItem = item);
            this.domElem.attr('aria-activedescendant', item.domElem.attr('id'));
        } else if(this._hoveredItem === item) {
            this._hoveredItem = null;
            this.domElem.removeAttr('aria-activedescendant');
        }
        this._emit('item-hover', { item : item });
    },

    /**
     * @param {Object} item
     * @private
     */
    _scrollToItem : function(item) {
        var domElemOffsetTop = this.domElem.offset().top,
            itemDomElemOffsetTop = item.domElem.offset().top,
            relativeScroll;

        if((relativeScroll = itemDomElemOffsetTop - domElemOffsetTop) < 0 ||
            (relativeScroll =
                itemDomElemOffsetTop +
                item.domElem.outerHeight() -
                domElemOffsetTop -
                this.domElem.outerHeight()) > 0) {
            this.domElem.scrollTop(this.domElem.scrollTop() + relativeScroll);
        }
    },

    /**
     * @param {Object} item
     * @param {Object} data
     * @private
     */
    _onItemClick : function(item, data) {
        this._emit('item-click', { item : item, source : data.source });
    },

    /**
     * @param {jQuery.Event} e
     * @private
     */
    _onKeyDown : function(e) {
        var keyCode = e.keyCode,
            isArrow = keyCode === keyCodes.UP || keyCode === keyCodes.DOWN;

        if(isArrow && !e.shiftKey) {
            e.preventDefault();

            var dir = keyCode - 39, // using the features of key codes for "up"/"down" ;-)
                items = this.getItems(),
                len = items.size(),
                hoveredIdx = items.toArray().indexOf(this._hoveredItem),
                nextIdx = hoveredIdx,
                i = 0;

            do {
                nextIdx += dir;
                nextIdx = nextIdx < 0? len - 1 : nextIdx >= len? 0 : nextIdx;
                if(++i === len) return; // if we have no next item to hover
            } while(items.get(nextIdx).hasMod('disabled'));

            this._lastTyping.index = nextIdx;

            items.get(nextIdx).setMod('hovered');
        }
    },

    /**
     * @param {jQuery.Event} e
     * @private
     */
    _onKeyPress : function(e) {
        var item = this.searchItemByKeyboardEvent(e);
        item && item.setMod('hovered');
    },

    /**
     * @param {Object} item
     * @param {String} text
     * @private
     */
    _doesItemMatchText : function(item, text) {
        return !item.hasMod('disabled') &&
            item.getText().toLowerCase().search(text) === 0;
    }
}, /** @lends menu */{
    lazyInit : true,
    onInit : function() {
        this._events(MenuItem)
            .on({ modName : 'hovered', modVal : '*' }, function(e) {
                this._onItemHover(e.target);
            })
            .on('click', function(e, data) {
                this._onItemClick(e.target, data);
            });

        return this.__base.apply(this, arguments);
    }
}));

});
