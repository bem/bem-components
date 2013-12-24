modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl('link', {
    _onClick : function(e) {
        this.hasMod('disabled')?
            e.preventDefault() :
            this.emit('click');
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
