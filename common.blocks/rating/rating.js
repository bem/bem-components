modules.define('rating', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl('rating', {
        onSetMod : {
            'js' : {
                'inited' : function() {
                }
            }
        },

        setVal : function(point, total, votes) {
            var layerWidth = ( ( (point + total) / (votes + 1) ) * 16).toFixed(1);
            this.findElem('labelCut').width(layerWidth);
        },

        getVal : function(elemInput) {
            this.setVal(1, 5, 1);
            return  elemInput.context.value;
        }
    }, {
        live : function() {
            this.liveBindTo('input', 'click', function(e) {
                this.getVal(e.currentTarget);
            });
            return false;
        }
    }));

});
