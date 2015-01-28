modules.define('summon-test', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var popup = this.findBlockInside('popup', 'popup'),
                    currentAnchor = null;

                BEMDOM.blocks.link.on(this.elem('summoner'), 'click', function(e) {
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
