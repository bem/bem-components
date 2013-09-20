BEM.DOM.decl('input', null, {

    live : function() {

        this.liveBindTo('clear', 'pointerdown', function(e) {
            e.preventDefault();
            this._onClearClick();
        });

        return false;

    }

});
