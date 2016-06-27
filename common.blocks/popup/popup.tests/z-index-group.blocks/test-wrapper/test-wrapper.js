modules.define('test-wrapper', ['i-bem-dom', 'popup', 'link'], function(provide, bemDom, Popup, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var popup = this._elem('summon').findChildBlock(Popup);
                this._elem('summoner').findChildBlocks(Link).on('click', function(e) {
                    popup.setAnchor(e.target).setMod('visible');
                });
            }
        }
    }
}));

});
