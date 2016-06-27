modules.define('test', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var popup = this.findChildBlock('popup'),
                    destructor = this.findMixedBlock('destructor', 'link'),
                    position = this.params.position,
                    link = this.findChildBlock('link');

                if(position) {
                    popup.setPosition.apply(popup, position);
                } else {
                    popup.setAnchor(link);
                }

                link.on('click', function() {
                    popup.toggleMod('visible', true);
                });

                destructor && destructor.on('click', function() {
                    bemDom.destruct(this.domElem);
                }, this);
            }
        }
    }
}));

});
