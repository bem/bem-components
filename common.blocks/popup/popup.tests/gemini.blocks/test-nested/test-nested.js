modules.define('test-nested', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var button = this.findBlockInside('button'),
                    popup = this.findBlockInside('popup').setAnchor(button);

                button.on('click', function() {
                    popup.toggleMod('visible');
                });
            }
        }
    }
}));

});
