modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl('test', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var link = this.findBlockInside('link');
                link.on('click', function() {
                    this.findBlockInside('popup').toggle(link);
                }, this);
            }
        }
    }
});

provide(BEMDOM);

});
