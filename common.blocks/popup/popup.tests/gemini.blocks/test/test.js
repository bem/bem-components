modules.define('test', ['i-bem-dom', 'popup', 'link'], function(provide, bemDom, Popup, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var link = this.findChildBlock(Link),
                    popup = this.findChildBlock(Popup),
                    updateLink = popup.findChildBlock(Link),
                    target = this.params.target;

                target?
                    popup.setPosition(target[0], target[1]) :
                    popup.setAnchor(link);

                updateLink && this._events(updateLink).on('click', function() {
                    popup.setContent('content updated');
                });

                this._events(link).on('click', function() {
                    popup.toggleMod('visible');
                });
            }
        }
    }
}));

});
