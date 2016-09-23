modules.define('test', ['i-bem-dom', 'popup', 'link'], function(provide, bemDom, Popup, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var links = this.findChildBlocks(Link),
                    popup = this.findChildBlock(Popup).setAnchor(links.get(0));

                this._events(links.get(0)).on('click', function() {
                    popup.toggleMod('visible');
                });

                this._events(links.get(1)).on('click', function() {
                    bemDom.destruct(this.domElem);
                }, this);
            }
        }
    }
}));

});
