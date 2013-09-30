modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl('link', {
    _onClick : function(e) {
        e.preventDefault();
        this.hasMod('disabled') || this.trigger('click');
    }
}, {
    live : function() {
        this.liveBindTo('pointerclick', function(e) {
            this._onClick(e);
        });
    }
});

provide(BEMDOM);

});
