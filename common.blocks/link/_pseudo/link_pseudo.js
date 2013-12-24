modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl({ block : 'link', modName : 'pseudo', modVal : true }, {
    _onClick : function(e) {
        e.preventDefault();
        this.__base.apply(this, arguments);
    }
});

provide(BEMDOM);

});
