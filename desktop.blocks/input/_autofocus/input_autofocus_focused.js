modules.define('i-bem__dom', ['dom'], function(provide, dom, BEMDOM) {

BEMDOM.decl({ block : 'input', modName : 'autofocus', modVal : 'focused' }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                dom.isEditable(dom.getFocused()) || this.setMod('focused');
            }
        }
    }
});

provide(BEMDOM);

});
