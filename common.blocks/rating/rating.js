modules.define('rating', ['i-bem__dom', 'control', 'keyboard__codes'],

    function(provide, BEMDOM, Control, keyCodes) {

    provide(BEMDOM.decl({ block : this.name, baseBlock : Control }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    this._elemLabels = this._getItems();
                    this._elemLen = this._elemLabels.length + 1;
                    this._hoveredElem = null;
                    this._startMove = true;

                    this._layerWidth = 0;
                    this._on = true;
                }
            },

            'focused' : {
                'true' : function() {
                    this.__base.apply(this, arguments);
                    this.hasMod('focused') && this.bindToDoc('keydown', this._onKeyDown);
                },

                '' : function() {
                    this
                        .unbindFromDoc('keydown', this._onKeyDown)
                        .__base.apply(this, arguments);

                    this._removeFocusFromElem();
                    this._resetToDefault();
                }
            },

        },

        setVal : function(point, total, votes) {
            this._layerWidth = ( ( (point + total) / (votes + 1) ) * this.params.size).toFixed(1);
            this.findElem('labelCut').width(this._layerWidth);
        },

        getVal : function(elemInput) {
            var val = Number(elemInput.context.value);

            this._removeFocusFromElem();
            this.setVal(val, 4, 1); // временно, чтобы сразу оттестить новый голос
            this._on = false; // можно поставить модификатор _disabled
            return val;
        },

        _getItems : function() {
            return this.findElem('label');
        },

        _resetToDefault : function() {
            this._elemLen = this._elemLabels.length + 1;
            this._hoveredElem = null;
            this._startMove = true;
        },

        _removeFocusFromElem : function() {
            this.delMod(this._elemLabels.eq(this._hoveredElem), 'hovered');
        },

        _onKeyDown : function(e) {
            var keyCode = e.keyCode;

            this._hoveredElem !== null && (this._removeFocusFromElem());
            this._elemLen < 0 && (this._elemLen = this._elemLabels.length - 1);
            this._elemLen > this._elemLabels.length - 1 && (this._elemLen = 0);

            if(keyCode === keyCodes.DOWN && !e.shiftKey) {
                e.preventDefault();
                this._elemLen++;
            }

            if(keyCode === keyCodes.UP && !e.shiftKey) {
                !this._startMove && (this._elemLen--);
            }

            this._hoveredElem = this._elemLen - 1;
            this.setMod(this._elemLabels.eq(this._hoveredElem), 'hovered');
            this._startMove = false;

            if(this._on && keyCode === keyCodes.SPACE) {
                this._removeFocusFromElem();
                this.findElem('input').eq(this._hoveredElem).click();
                this._resetToDefault();
            }
        },

    }, {
        live : function() {
            this.liveBindTo('input', 'click', function(e) {
               (this._on && this.getVal(e.currentTarget));
            });

            return this.__base.apply(this, arguments);
        }
    }));

});
