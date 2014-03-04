modules.define('link', function(provide, Link) {

provide(Link.decl({ modName : 'pseudo', modVal : true }, {
    _onClick : function(e) {
        e.preventDefault();
        this.__base.apply(this, arguments);
    }
}));

});
