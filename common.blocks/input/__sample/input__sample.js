BEM.DOM.decl('input', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                BEM.blocks['b-link'].on(this.elem('samples'), 'click', this._onSampleClick, this);
            }
        },

        'disabled' : function(modName, modVal) {
            this.findBlocksInside(this.elem('samples'), 'b-link').forEach(function(link) {
                link.setMod(modName, modVal);
            });
        }
    },

    destruct : function() {
        BEM.blocks['b-link'].un(this.domElem, 'click');
        this.__base.apply(this, arguments);
    },

    _onSampleClick : function(e) {
        var linkDomElem = e.target.domElem,
            sampleParams = this.elemParams(linkDomElem);

        this.val('val' in sampleParams? sampleParams.val : linkDomElem.text(), { source : 'sample' });
    }
});