modules.define('rating', ['i-bem__dom', 'control', 'keyboard__codes'],

    function(provide, BEMDOM, Control) {

    provide(BEMDOM.decl({ block : this.name, baseBlock : Control }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    this._layerWidth = 0;
                    this._on = true;

                    this.hasMod('focused') && this.bindToDoc('keydown', this._onKeyDown);
                }
            },

            'focused' : {
                'true' : function() {
                    this.__base.apply(this, arguments);
                },

                '' : function() {

                }
            },

        },

        setVal : function(point, total, votes) {
            this._layerWidth = ( ( (point + total) / (votes + 1) ) * 16).toFixed(1);
            this.findElem('labelCut').width(this._layerWidth);
        },

        getVal : function(elemInput) {
            var val = Number(elemInput.context.value);

            this.setVal(val, 4, 1);
            this._on = false; // можно поставить модификатор _disabled
            return val;
        }

    }, {
        live : function() {
            this.liveBindTo('input', 'click', function(e) {
               (this._on && this.getVal(e.currentTarget));
            });

            return this.__base.apply(this, arguments);
        }
    }));

});
