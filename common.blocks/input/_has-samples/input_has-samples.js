modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl({ block : 'input', modName : 'has-samples', modVal : true }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                BEMDOM.blocks['link'].on(this.elem('samples'), 'click', this._onSampleClick, this);
            },

            '' : function() {
                this.__base.apply(this, arguments);
                BEMDOM.blocks['link'].un(this.domElem, 'click');
            }
        },

        'disabled' : function(modName, modVal) {
            this.__base.apply(this, arguments);

            this.findBlocksInside(this.elem('samples'), 'link').forEach(function(link) {
                link.setMod(modName, modVal);
            });
        }
    },

    _onSampleClick : function(e) {
        this.setVal(
            this.elemParams(e.target.domElem).val,
            { source : 'sample' });
    }
});

provide(BEMDOM);

});
