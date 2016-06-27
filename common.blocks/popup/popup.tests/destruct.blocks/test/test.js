modules.define('test', ['i-bem-dom', 'popup', 'link'], function(provide, bemDom, Popup, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var links = this.findChildBlocks(Link),
                    popup = this.findChildBlock(Popup).setAnchor(links.get(0));

                links.get(0)._events().on('click', function() {
                    popup.toggleMod('visible');
                });

                links.get(1)._events().on('click', function() {
                    bemDom.destruct(this.domElem);
                }, this);
            }
        }
    }
}));

});
