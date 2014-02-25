modules.define({ block : 'link' }, function(provide) {

provide({
    _onClick : function(e) {
        this.hasMod('disabled')?
            e.preventDefault() :
            this.emit('click');
    }
}, {
    live : function() {
        this.liveBindTo('pointerclick', function(e) {
            this._onClick(e);
        });
    }
});

});
