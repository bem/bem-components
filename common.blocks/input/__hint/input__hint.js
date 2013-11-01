BEM.DOM.decl('input', {

    onSetMod : {

        'js' : function() {

            this.__base.apply(this, arguments);

            (this._hasHint = !!this.elem('hint')[0]) &&
                this
                    .on('change', this._updateHint)
                    ._updateHint();

        },

        'focused' : function() {

            if(this.__base.apply(this, arguments) === false) {
                return false;
            }

            this._hasHint && this._updateHint();

        }

    },

    /**
     * Show/hide the hint
     * @private
     */
    _updateHint : function() {

        this.toggleMod(this.elem('hint'), 'visibility', 'visible', !(this.val()));

    }

});
