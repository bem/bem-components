modules.define('popup', function(provide, Popup) {

provide(Popup.decl({ modName : 'target', modVal : 'position' }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this
                    .setPosition(50, 50)
                    .setMod('visible');
            }
        }
    }
}));

});
