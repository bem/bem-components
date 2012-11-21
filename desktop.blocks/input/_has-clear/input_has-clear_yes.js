BEM.DOM.decl({ name : 'input', modName : 'has-clear', modVal : 'yes' }, {

    onSetMod : {

        'js' : function() {

            this.__base.apply(this, arguments);
            this
                .on('change', this._updateClear)
                ._updateClear();

        }

    },

    _onClearClick : function() {

        this.trigger('clear');
        this.removeInsets &&
            this.removeInsets();

        this
            .val('')
            .setMod('focused', 'yes');

    },

    _updateClear : function() {

        return this.toggleMod(this.elem('clear'), 'visibility', 'visible', '', !!this._val);

    }

}, {

    live : function() {

        this.__base();
        this.liveBindTo('clear', 'leftclick', function() {
            this._onClearClick();
        });

        return false;

    }

});