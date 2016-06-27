modules.define('test', ['i-bem-dom', 'link', 'popup'], function(provide, bemDom, Link, Popup) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var popup = this.findChildBlock(Popup),
                    destructor = this.findChildElem('destructor'),
                    destructorLink = destructor && destructor.findMixedBlock(Link),
                    position = this.params.position,
                    link = this.findChildBlock(Link);

                if(position) {
                    popup.setPosition.apply(popup, position);
                } else {
                    popup.setAnchor(link);
                }

                this._events(Link).on('click', function() {
                    popup.toggleMod('visible', true);
                });

                destructorLink && this._events(destructorLink).on('click', function() {
                    bemDom.destruct(this.domElem);
                }, this);
            }
        }
    }
}));

});
