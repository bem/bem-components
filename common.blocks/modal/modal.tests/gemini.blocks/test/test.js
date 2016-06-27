modules.define('test', ['i-bem-dom', 'modal', 'link'], function(provide, bemDom, Modal, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var modal = this.findChildBlock(Modal);

                this.findChildBlock(Link)._events().on('click', function() {
                    modal.toggleMod('visible');
                });
            }
        }
    }
}, {
    lazyInit : false
}));

});
