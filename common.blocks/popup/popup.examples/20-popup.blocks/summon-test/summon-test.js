modules.define('summon-test', ['i-bem-dom', 'link', 'popup'], function(provide, bemDom, Link, Popup) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var popup = this.findChildBlock('popup', Popup),
                    currentAnchor = null;

                // TODO: check
                // it was something like `Link._events('summoner').on('click', function(e) {`
                this._events(Link).on('click', function(e) {
                    var link = e.target;

                    if(currentAnchor === link) {
                        popup.toggleMod('visible', true);
                        return;
                    }

                    popup.setAnchor(link).setMod('visible', true);
                    currentAnchor = link;
                });

            }
        }
    }
}));

});
