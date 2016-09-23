modules.define('test', ['i-bem-dom', 'popup', 'link'], function(provide, bemDom, Popup, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var popup = this.findChildBlock(Popup).setAnchor(
                    this._events(Link).on('click', function() {
                        popup.toggleMod('visible');
                    })
                );
            }
        }
    }
}));

});
