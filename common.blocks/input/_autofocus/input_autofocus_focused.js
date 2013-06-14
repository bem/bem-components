modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl({ block : 'input', modName : 'autofocus', modVal : 'focused' }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                var activeDomNode = this.__self.getActiveDomNode();
                // если фокус нигде не стоит или стоит не в текстовом элементе,
                // то делаем автофокус
                activeDomNode && this.__self.isTextDomNode(activeDomNode) ||
                    (this.setMod('focused', 'yes')._focused = true);
            }
        }
    }
});

provide(DOM);

});
