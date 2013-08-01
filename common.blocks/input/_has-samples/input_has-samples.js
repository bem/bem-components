modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl({ block : 'input', modName : 'has-samples', modVal : true }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                DOM.blocks['link'].on(this.elem('samples'), 'click', this._onSampleClick, this);
            },

            '' : function() {
                this.__base.apply(this, arguments);
                DOM.blocks['link'].un(this.domElem, 'click');
            }
        },

        'disabled' : function(modName, modVal) {
            this.findBlocksInside(this.elem('samples'), 'link').forEach(function(link) {
                link.setMod(modName, modVal);
            });
        }
    },

    _onSampleClick : function(e) {
        this.val(
            this.elemParams(e.target.domElem).val,
            { source : 'sample' });
    }
});

provide(DOM);

});
