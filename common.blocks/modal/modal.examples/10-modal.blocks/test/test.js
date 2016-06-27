modules.define('test', ['i-bem-dom', 'modal', 'link'], function(provide, bemDom, Modal, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var modal = this.findChildBlock(Modal);

                Link._events(this.domElem).on('click', function() {
                    modal.setMod('visible', true);
                });
            }
        }
    }
}));

});
