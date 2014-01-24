modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl('test', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var link = this.findBlockInside('link'),
                    popup = this.findBlockInside('popup').setTarget(link);

                link.on('click', function() {
                    popup.toggleMod('visible');
                });
            }
        }
    }
});

provide(BEMDOM);

});
