modules.define('link-popup', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
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
}));

});
