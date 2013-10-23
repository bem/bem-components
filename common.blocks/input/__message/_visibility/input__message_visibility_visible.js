BEM.DOM.decl('input', {
    onSetMod : {
        js : {
            inited : function() {
                this.__base.apply(this, arguments);

                this.elem('message').attr('aria-hidden', true);
                this.elem('message', 'visibility', 'visible').attr('aria-hidden', false);
            }
        }
    },

    onElemSetMod : {
        message : {
            visibility : function(elem, modName, modVal) {
                this.__base.apply(this, arguments);
                elem.attr('aria-hidden', modVal !== 'visible');
            }
        }
    }
});
