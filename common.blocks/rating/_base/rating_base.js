modules.define('rating', ['i-bem__dom', 'control', 'keyboard__codes', 'jquery'],

    function(provide, BEMDOM, Control, keyCodes, $) {

    provide(BEMDOM.decl({ block : this.name, modName : 'base', modVal : true, baseBlock : Control }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    this._on = true;
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
            if(params.onceVote) {
                this._on = false;
                this.setMod('disabled');
            }
        },

        setVal : function(score) {
            this.findElem('result').width(score);
            return this;
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

                return this
                    ._onItemOut()
                    ._onItemHover(items.eq(nextIdx));
            }

            if(keyCode === keyCodes.SPACE) {
                e.preventDefault();
                (this._on && this._hoveredItem[0].click());
                if(this.params.onceVote) {
                    this._on = false;
                    this.setMod('disabled');
                }
                return this;
            }
        },

        _onItemHover : function(item) {
            this
                .delMod(this._hoveredItem, 'hovered')
                .setMod(item, 'hovered')
                .setMod('hovered')
                ._hoveredItem = item;
            return this;
        },

        _onItemOut : function() {
            this
                .delMod(this._hoveredItem, 'hovered')
                .delMod('hovered')
                ._hoveredItem = null;
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
