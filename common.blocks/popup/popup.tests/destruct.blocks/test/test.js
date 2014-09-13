modules.define('test', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var links = this.findBlocksInside('link'),
                    popup = this.findBlockInside('popup').setAnchor(links[0]);

                links[0].on('click', function() {
                    popup.toggleMod('visible');
                });

                links[1].on('click', function() {
                    BEMDOM.destruct(this.domElem);
                }, this);
            }
        }
    }
}));

});
