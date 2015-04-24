modules.define('test', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                var modal = this.findBlockInside('modal'),
                    trigger = this.findBlockInside({ block : 'link', modName : 'show-modal', modVal : true });

                trigger.on('click', function() {
                    modal.setMod('visible');
                });
            }
        }
    }
}));

});
