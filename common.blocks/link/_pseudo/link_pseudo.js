modules.define({ block : 'link', modName : 'pseudo', modVal : true }, function(provide) {

provide({
    _onClick : function(e) {
        e.preventDefault();
        this.__base.apply(this, arguments);
    }
});

});
