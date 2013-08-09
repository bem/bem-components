modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl({ block : 'input', modName : 'has-hint', modVal : true }, {
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
        this.toggleMod(this.elem('hint'), 'visible', true, !this.getVal());
    }
});

provide(BEMDOM);

});
