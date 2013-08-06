modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl('button', {
    beforeSetMod : {
        'hovered' : {
            true : function() {
                if(this.isDisabled())
                    return false;
            }
        }
    },

    onSetMod : {
        'hovered' : {
            '' : function() {
                this.delMod('pressed');
            }
        }
    }
}, {
    live : function() {
        this.liveBindTo('mouseover mouseout', function(e) {
            this.setMod('hovered', e.type === 'mouseover');
        });

        return this.__base.apply(this, arguments);
    }
});

provide(BEMDOM);

});