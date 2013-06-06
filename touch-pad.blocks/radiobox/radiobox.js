BEM.DOM.decl('radiobox', null, {

    live : function() {

    	this.__base.apply(this, arguments);

        this.liveBindTo('radio', 'tap', function(e) {
            this._onLeftClick(e);
            this._onChange(e);
        });

        return false;

    }
});