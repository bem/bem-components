modules.define('test', ['i-bem-dom', 'modal', 'link'], function(provide, bemDom, Modal, Link) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var modal = this.findChildBlock(Modal),
                    trigger = this.findChildBlock({ block : Link, modName : 'show-modal', modVal : true });

                this._events(trigger).on('click', function() {
                    modal.setMod('visible');
                });
            }
        }
    }
}));

});
