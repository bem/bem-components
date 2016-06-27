modules.define('test', ['i-bem-dom', 'menu', 'button'],
    function(provide, bemDom, Menu, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var menu = this.findChildBlock(Menu);
                this.findChildBlocks(Button).forEach(function(button) {
                    button._events().on('click', function() {
                        menu.setVal(this.params.val);
                    });
                });
            }
        }
    }
}));

});
