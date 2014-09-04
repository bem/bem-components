modules.define('test', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var link = this.findBlockInside('link'),
                    popup = this.findBlockInside('popup').setAnchor(link);

                link.on('click', function() {
                    popup.toggleMod('visible');
                });
            }
        }
    }
}));

});
