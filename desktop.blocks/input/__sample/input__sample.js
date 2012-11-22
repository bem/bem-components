BEM.DOM.decl('input', {

    _setValFromSample : function(elem) {

        if(!this.hasMod('disabled', 'yes')) {
            var params = this.__self.extractParams(elem[0]);
            this.val('val' in params? params.val : elem.text(), { source : 'sample' });
        }

    }

}, {

    live : function() {

        this.__base();
        this.liveBindTo('sample', 'leftclick', function(e) {
            var linkSelector = BEM.blocks['b-link'].buildSelector('pseudo', 'yes');
            $(e.target).closest(this.buildSelector('sample') + ',' + linkSelector).is(linkSelector) &&
                this._setValFromSample(e.data.domElem);
        });

        return false;

    }

});
