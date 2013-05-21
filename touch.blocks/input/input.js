BEM.DOM.decl('input', null, {

    live : function() {

        this.liveBindTo('clear', 'pointerdown', function() {
            this._onClearClick();
        });

        return false;

    }

});
