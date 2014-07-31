modules.define('test', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var binders = this.findBlocksOn('bind-to-me', 'link'),
                    bindPopup = this.findBlockOn('bind-popup', 'popup');

                bindPopup.findBlockInside('link').on('click', function() {
                    bindPopup.delMod('visible');
                });

                binders.forEach(function(binder) {
                    binder.on('click', function(e) {
                        bindPopup.setTarget(e.target).setMod('visible');
                    });
                });
            }
        }
    }
}));

});
