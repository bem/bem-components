modules.define('popup', ['objects'], function(provide, objects, Popup) {

provide(Popup.decl({ modName : 'theme', modVal : 'islands' }, {
    getDefaultParams : function() {
        return objects.extend(
            this.__base(),
            {
                mainOffset : 5,
                viewportOffset : 10
            });
    }
}));

});
