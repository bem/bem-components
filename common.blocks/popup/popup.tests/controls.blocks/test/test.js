modules.define('test', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var popup = this.findBlockInside('popup').setAnchor(
                    this.findBlockInside('link')
                        .on('click', function() { popup.toggleMod('visible'); })
                );
            }
        }
    }
}));

});
