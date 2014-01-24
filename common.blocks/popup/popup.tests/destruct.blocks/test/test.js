modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl('test', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var links = this.findBlocksInside('link'),
                    popup = this.findBlockInside('popup').setTarget(links[0]);

                links[0].on('click', function() {
                    popup.toggleMod('visible');
                });

                links[1].on('click', function() {
                    BEMDOM.destruct(this.domElem);
                }, this);
            }
        }
    }
});

provide(BEMDOM);

});
