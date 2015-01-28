modules.define('test', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var modal = this.findBlockInside('modal');

                BEMDOM.blocks.link.on(this.domElem, 'click', function() {
                    modal.setMod('visible', true);
                });
            }
        }
    }
}));

});
