modules.define('rating', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl('rating', {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this._layerWidth = 0;
                    this._on = true;
                }
            }
        },

        setVal : function(point, total, votes) {
            this._layerWidth = ( ( (point + total) / (votes + 1) ) * 16).toFixed(1);
            this.findElem('labelCut').width(this._layerWidth);
        },

        getVal : function(elemInput) {
            var val = Number(elemInput.context.value);

            this.setVal(val, 4, 1);
            this._on = false;
            return val;
        }
    }, {
        live : function() {
            this.liveBindTo('input', 'click', function(e) {
               (this._on && this.getVal(e.currentTarget));
            });
            return false;
        }
    }));

});
