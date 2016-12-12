modules.define('test', ['i-bem-dom', 'popup', 'link'], function(provide, bemDom, Popup, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var link = this.findChildBlock(Link),
                    popup = this.findChildBlock(Popup).setAnchor(link);

                this._events(Link).on('click', function() {
                    popup.toggleMod('visible');
                });
            }
        }
    }
}));

});
