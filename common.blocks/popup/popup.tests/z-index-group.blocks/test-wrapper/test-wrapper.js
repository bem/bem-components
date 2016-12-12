modules.define('test-wrapper', ['i-bem-dom', 'popup', 'link'], function(provide, bemDom, Popup, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var popup = this._elem('summon').findMixedBlock(Popup);

                this.findChildElems('summoner').forEach(function(summoner) {
                    var link = summoner.findMixedBlock(Link);

                    this._events(link).on('click', function(e) {
                        popup.setAnchor(e.target).setMod('visible');
                    });
                }, this);
            }
        }
    }
}));

});
