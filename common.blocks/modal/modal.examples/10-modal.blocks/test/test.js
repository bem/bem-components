modules.define('test', ['i-bem-dom', 'modal', 'link'], function(provide, bemDom, Modal, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var modal = this.findChildBlock(Modal);

                this._events(Link).on('click', function() {
                    modal.setMod('visible', true);
                });
            }
        }
    }
}));

});
