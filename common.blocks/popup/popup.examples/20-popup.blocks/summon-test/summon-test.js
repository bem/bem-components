modules.define('summon-test', ['i-bem-dom', 'link', 'popup'], function(provide, bemDom, Link, Popup) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var popup = this.findChildElem('popup').findMixedBlock(Popup),
                    currentAnchor = null;

                this.findChildElems('summoner').forEach(function(summoner) {
                    var link = summoner.findMixedBlock(Link);

                    this._events(link).on('click', function() {
                        if(currentAnchor === link) {
                            popup.toggleMod('visible', true);
                            return;
                        }

                        popup.setAnchor(link).setMod('visible', true);
                        currentAnchor = link;
                    });
                }, this);
            }
        }
    }
}));

});
