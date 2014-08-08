modules.define('rating', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl('rating', {
        onSetMod : {
            'js' : {
                'inited' : function() {
                }
            }
        },

        setVal : function(points) {
            this.findElem('labelCut').width(points);
        },

        getVal : function(elemInput) {
            this.setVal(80);
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
