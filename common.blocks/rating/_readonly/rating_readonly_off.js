modules.define('rating', ['i-bem__dom', 'control', 'keyboard__codes', 'jquery'],

    function(provide, BEMDOM, Control, keyCodes, $) {

    provide(BEMDOM.decl({ block : this.name, modName : 'readonly', modVal : 'off', baseBlock : Control }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    this._score = 0;
                    this._on = true;
                    this._hoveredItem = null;
                }
            },

            'focused' : {
                'true' : function() {
                    this.__base.apply(this, arguments);
                    this.bindToDoc('keydown', this._onKeyDown);
                },

                '' : function() {
                    this
                        .unbindFromDoc('keydown', this._onKeyDown)
                        .delMod(this._hoveredItem, 'hovered')
                        .__base.apply(this, arguments);
                    this._hoveredItem = null;
                }
            }

        },

        _vote : function(point) {
            var params = this.params;

            this._score = ( ( (point + params.total) / (params.votes + 1) ) * params.size).toFixed(1);
            this.setVal(this._score);
        },

        setVal : function(score) {
            this.findElem('staticLayer').width(score);
        },

        getVal : function() {
            return this._score;
        },

        _onKeyDown : function(e) {
            var keyCode = e.keyCode,
                isArrow = keyCode === keyCodes.LEFT || keyCode === keyCodes.RIGHT;

            if(isArrow && !e.shiftKey) {
                e.preventDefault();
                var items = this.findElem('label'),
                    len = items.length,
                    hoveredIdx = this._hoveredItem ? items.index(this._hoveredItem) : -1,
                    nextIdx = hoveredIdx;

                nextIdx += 38 - keyCode; // using the features of key codes for "left"/"right" ;-)
                nextIdx = nextIdx < 0? len - 1 : nextIdx >= len? 0 : nextIdx;

                this._onItemOut();
                this._onItemHover(items.eq(nextIdx));
                return this;
            }

            if(keyCode === keyCodes.SPACE) {
                e.preventDefault();
                this._on && this._hoveredItem[0].click();
                return this;
            }
        },

        _onItemHover : function(item) {
            this
                .delMod(this._hoveredItem, 'hovered')
                .setMod(item, 'hovered')
                .setMod('hovered');
            this._hoveredItem = item;
            return this;
        },

        _onItemOut : function() {
            this
                .delMod(this._hoveredItem, 'hovered')
                .delMod('hovered');
            this._hoveredItem = null;
            return this;
        }

    }, {
        live : function() {
            this.liveBindTo('input', 'click', function(e) {
                (this._on && this._vote(+$(e.currentTarget).val()));
            });

            this.liveBindTo('label', 'mousemove', function(e) {
                this._onItemHover(e.currentTarget);
            });

            this.liveBindTo('label', 'mouseout', this.prototype._onItemOut);

            return this.__base.apply(this, arguments);
        }
    }));

});
