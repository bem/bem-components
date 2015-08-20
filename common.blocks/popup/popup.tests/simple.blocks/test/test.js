modules.define('test', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var button = this.findBlockInside('button'),
                    popup = this.findBlockInside('popup'),
                    updateLink = popup.findBlockInside('link'),
                    target = this.params.target;

                target?
                    popup.setPosition(target[0], target[1]) :
                    popup.setAnchor(button);

                updateLink && updateLink.on('click', function() {
                    popup.setContent('content updated');
                });

                button.on('click', function() {
                    popup.toggleMod('visible');
                });
            }
        }
    }
}));

});
