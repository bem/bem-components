modules.define('test-wrapper', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var popup = this.findBlockInside('summon', 'popup');
                this.findBlocksInside('summoner', 'link').forEach(function(link) {
                    link.on('click', function(e) {
                        popup.setAnchor(e.target).setMod('visible');
                    });
                });
            }
        }
    }
}));

});
