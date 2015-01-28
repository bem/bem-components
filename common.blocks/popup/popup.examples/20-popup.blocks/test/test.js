modules.define('test', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var popup = this.findBlockInside('popup'),
                    destructor = this.findBlockOn('destructor', 'link'),
                    position = this.params.position;

                var link = this.findBlockInside('link');

                if(position) {
                    popup.setPosition.apply(popup, position);
                } else {
                    popup.setAnchor(link);
                }

                link.on('click', function() {
                    popup.toggleMod('visible', true);
                });

                destructor && destructor.on('click', function() {
                    BEMDOM.destruct(this.domElem);
                }, this);
            }
        }
    }
}));

});
