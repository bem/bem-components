modules.define('rating', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl('rating', {
        onSetMod : {
            'js' : {
                'inited' : function() {
                }
            }
        },

        setVal : function() {

        },

        getVal : function(elemInput) {
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
