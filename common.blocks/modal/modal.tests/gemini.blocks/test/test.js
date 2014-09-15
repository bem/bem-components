modules.define('test', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var modal = this.findBlockInside('modal');

                this.findBlockInside('link').on('click', function() {
                    modal.toggleMod('visible');
                });
            }
        }
    }
}, {
    live : false
}));

});
