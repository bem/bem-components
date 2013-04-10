BEM.DOM.decl('input', null, {

    live : function() {

        this.liveBindTo('clear', 'leftclick tap', function() {
            this._onClearClick();
        });

        return false;

    }
});
