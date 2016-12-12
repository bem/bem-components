modules.define('test', ['i-bem-dom', 'menu', 'button'],
    function(provide, bemDom, Menu, Button) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var _this = this,
                    menu = this.findChildBlock(Menu);

                this.findChildBlocks(Button).forEach(function(button) {
                    _this._events(button).on('click', function() {
                        menu.setVal(button.params.val);
                    });
                });
            }
        }
    }
}));

});
