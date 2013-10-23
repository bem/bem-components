BEM.DOM.decl('input', {
    onElemSetMod : {
        message : {
            visibility : function(elem, modName, modVal) {
                this.__base.apply(this, arguments);

                this.hasMod(elem, 'type', 'error') &&
                    this.elem('control').attr('aria-invalid', modVal === 'visible');
            }
        }
    }
});
