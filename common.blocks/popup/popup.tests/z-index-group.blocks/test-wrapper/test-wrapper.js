modules.define('test-wrapper', ['i-bem-dom', 'popup', 'link'], function(provide, bemDom, Popup, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var popup = this._elem('summon').findChildBlock(Popup),
                    links = this._elem('summoner').findChildBlocks(Link);

                // TODO: check
                this._events(links).on('click', function(e) {
                    popup.setAnchor(e.target).setMod('visible');
                });
            }
        }
    }
}));

});
