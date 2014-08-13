modules.define('rating', ['i-bem__dom', 'control', 'keyboard__codes'],

    function(provide, BEMDOM, Control, keyCodes) {

    provide(BEMDOM.decl({ block : this.name, baseBlock : Control }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    this.elemLabels = this._getItems();
                    this.elemLen = this.elemLabels.length + 1;
                    this.hoveredElem = null;
                    this.startMove = true;

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
                }
            },

        },

        _getItems : function() {
            return this.findElem('label');
        },

        setVal : function(point, total, votes) {
            this._layerWidth = ( ( (point + total) / (votes + 1) ) * this.params.size).toFixed(1);
            this.findElem('labelCut').width(this._layerWidth);
        },

        getVal : function(elemInput) {
            var val = Number(elemInput.context.value);

            this.delMod(this.elemLabels.eq(this.hoveredElem), 'hovered');
            this.setVal(val, 4, 1);
            this._on = false; // можно поставить модификатор _disabled
            return val;
        },

        _onKeyDown : function(e) {
            var keyCode = e.keyCode;

            this.hoveredElem !== null && (this.delMod(this.elemLabels.eq(this.hoveredElem), 'hovered'));
            this.elemLen < 0 && (this.elemLen = this.elemLabels.length - 1);
            this.elemLen > this.elemLabels.length - 1 && (this.elemLen = 0);

            if(keyCode === keyCodes.DOWN && !e.shiftKey) {
                this.elemLen += 1;
            }

            if(keyCode === keyCodes.UP && !e.shiftKey) {
                !this.startMove && (this.elemLen -= 1);
            }

            this.hoveredElem = this.elemLen - 1;
            this.setMod(this.elemLabels.eq(this.hoveredElem), 'hovered');
            this.startMove = false;

            keyCode === keyCodes.SPACE && (this.findElem('input').eq(this.hoveredElem).click());
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
