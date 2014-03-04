modules.define('link', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
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
}));

});
