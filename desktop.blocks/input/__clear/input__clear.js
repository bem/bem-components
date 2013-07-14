BEM.DOM.decl('input', {

    bindInput : function() {

        var _this = this;

        _this
            .on('change', _this._updateClear)
            ._updateClear();

    },

    clearInput : function(data) {

        this.val('', data);

        return this;

    }

});