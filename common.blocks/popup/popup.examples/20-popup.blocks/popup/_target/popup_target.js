modules.define('popup', function(provide, Popup) {

provide(Popup.declMod({ modName : 'target', modVal : '*' }, {
    redraw : function() {
        var base = this.__base.apply(this, arguments);
        this.domElem.attr('zindex', this.domElem.css('z-index'));
        return base;
    }
}));

});
