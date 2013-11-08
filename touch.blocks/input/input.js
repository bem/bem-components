BEM.DOM.decl('input', {

    onSetMod: {

        js: function() {

            this.__base.apply(this, arguments);

            this.bindTo('input', function() {
                this.val(this.elem('control').val());
            });
        }
    }

}, {

    live : function() {

        this.liveBindTo('clear', 'pointerdown', function() {
            this._onClearClick();
        });

        return false;

    }

});
