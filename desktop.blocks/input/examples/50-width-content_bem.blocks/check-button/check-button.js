BEM.DOM.decl('check-button', {

    onSetMod : {

        'checked' : function(modName, modVal) {

            if(this.__base.apply(this, arguments) === false)
                return false;

            this.afterCurrentEvent(function() {
                this.trigger(modVal === 'yes' ? 'check' : 'release');
            });

        }

    }

});
