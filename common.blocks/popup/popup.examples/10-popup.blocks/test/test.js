modules.define('test', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var link = this.findChildBlock('link'),
                    popup = this.findChildBlock('popup')
                        .setAnchor(link);

                link.on('click', function() {
                    popup.setMod('visible', true);
                });
            }
        }
    }
}));

});
