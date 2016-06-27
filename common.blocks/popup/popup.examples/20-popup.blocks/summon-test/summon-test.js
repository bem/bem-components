modules.define('summon-test', ['i-bem-dom', 'link'], function(provide, bemDom, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var popup = this.findChildBlock('popup', 'popup'),
                    currentAnchor = null;

                Link._events('summoner').on('click', function(e) {
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
