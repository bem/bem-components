modules.define('test', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var link = this.findBlockInside('link'),
                    popup = this.findBlockInside('popup'),
                    updateLink = popup.findBlockInside('link'),
                    target = this.params.target;

                target?
                    popup.setTarget(target[0], target[1]) :
                    popup.setTarget(link);

                updateLink && updateLink.on('click', function() {
                    popup.setContent('content updated');
                });

                link.on('click', function() {
                    popup.toggleMod('visible');
                });
            }
        }
    }
}));

});
