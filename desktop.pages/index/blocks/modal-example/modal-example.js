modules.define('modal-example',
    ['i-bem-dom', 'modal', 'link'],
    function(provide, bemDom, Modal, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._modal = this.findChildBlock(Modal);

                this._events(this.findChildBlock(Link)).on('click', function() {
                    this._modal.toggleMod('visible');
                }, this);
            }
        }
    }
}));

});
