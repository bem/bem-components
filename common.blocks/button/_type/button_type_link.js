modules.define('button', function(provide, Button) {

provide(Button.decl({ modName : 'type', modVal : 'link' }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this._url = this.domElem.attr('href');
                this.hasMod('disabled') && this.domElem.removeAttr('href');
            }
        },

        'disabled' : {
            'true' : function() {
                this.__base.apply(this, arguments);
                this.domElem.removeAttr('href');
            },

            '' : function() {
                this.__base.apply(this, arguments);
                this.domElem.attr('href', this._url);
            }
        }
    },

    getUrl : function() {
        return this._url;
    },

    setUrl : function(url) {
        this._url = url;
        this.hasMod('disabled') || this.domElem.attr('href', url);
        return this;
    },

    _doAction : function() {
        this._url && (document.location = this._url);
    }
}));

});
