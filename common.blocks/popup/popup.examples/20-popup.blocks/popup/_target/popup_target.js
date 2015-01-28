modules.define('popup', function(provide, Popup) {

provide(Popup.decl({ modName : 'target' }, {
    redraw : function() {
        var base = this.__base.apply(this, arguments);
        this.domElem.attr('zindex', this.domElem.css('z-index'));
        return base;
    }
}));

});
