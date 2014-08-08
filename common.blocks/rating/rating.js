modules.define('rating', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl('rating', {
        onSetMod : {
            'js' : {
                'inited' : function() {
                }
            }
        },

        _LAYERWIDTH : 0,

        _ON : true,

        setVal : function(point, total, votes) {
            this._LAYERWIDTH = ( ( (point + total) / (votes + 1) ) * 16).toFixed(1);
            this.findElem('labelCut').width(this._LAYERWIDTH);
        },

        getVal : function(elemInput) {
            var val = Number(elemInput.context.value);

            this.setVal(val, 4, 1);
            this._ON = false;
            return val;
        }
    }, {
        live : function() {
            this.liveBindTo('input', 'click', function(e) {
               (this._ON && this.getVal(e.currentTarget));
            });
            return false;
        }
    }));

});
