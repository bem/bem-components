modules.define({ block : 'test' }, ['i-bem__dom', 'link', 'popup'], function(provide, BEMDOM) {

provide({
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

});
