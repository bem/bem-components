modules.define('i-bem__dom', function(provide, DOM) {

var LinkBlock = DOM.blocks['link'];

DOM.decl('input', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                LinkBlock.on(this.elem('samples'), 'click', this._onSampleClick, this);
            },

            '' : function() {
                this.__base.apply(this, arguments);
                LinkBlock.un(this.domElem, 'click');
            }
        },

        'disabled' : function(modName, modVal) {
            this.findBlocksInside(this.elem('samples'), 'link').forEach(function(link) {
                link.setMod(modName, modVal);
            });
        }
    },

    _onSampleClick : function(e) {
        var linkDomElem = e.target.domElem,
            sampleParams = this.elemParams(linkDomElem);

        this.val(
            sampleParams.hasOwnProperty('val')?
                sampleParams.val :
                linkDomElem.text(),
            { source : 'sample' });
    }
});

provide(DOM);

});
