modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl({ block : 'input', modName : 'has-hint', modVal : true }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this
                    .on('change', this._updateHint)
                    ._updateHint();
            }
        }
    },

    /**
     * Show/hide the hint
     * @private
     */
    _updateHint : function() {
        this.toggleMod(this.elem('hint'), 'visible', true, !this.val());
    }
});

provide(DOM);

});
