modules.define('rating', ['i-bem__dom'], function(provide, BEMDOM) {

    provide(BEMDOM.decl('rating', {

        onSetMod : {
            'js' : {
                'inited' : function() {

                }
            }
        },

        getVal : function(elemLabel) {
            return elemLabel.context.value;
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
