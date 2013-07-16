BEM.DOM.decl('input', null, {

    live : function() {

        this.liveBindTo('clear', 'click', function() {
            this._onClearClick();
        });

        return false;

    }

});
