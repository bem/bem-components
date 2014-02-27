modules.define('test', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var menu = this.findBlockInside('menu');
                this.findBlocksInside('button').forEach(function(button) {
                    button.on('click', function() {
                        menu.setVal(this.params.val);
                    });
                });
            }
        }
    }
}));

});
