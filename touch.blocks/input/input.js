BEM.DOM.decl('input', null, {

    live : function() {

        this.liveBindTo('clear', 'click', function(e) {
            this._onClearClick(e);
        });

        return false;

    }

});
