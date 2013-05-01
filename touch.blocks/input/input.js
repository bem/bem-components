BEM.DOM.decl('input', null, {

    live : function() {

        this.liveBindTo('clear', 'leftclick tap', function(e) {
            e.preventDefault();
            this._onClearClick();
        });

        return false;

    }
});
