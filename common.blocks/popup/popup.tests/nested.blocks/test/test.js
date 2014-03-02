modules.define({ block : 'test' }, ['link', 'popup'], function(provide) {

provide({
    onSetMod : {
        'js' : {
            'inited' : function() {
                var link = this.findBlockInside('link'),
                    popup = this.findBlockInside('popup').setTarget(link);

                link.on('click', function() {
                    popup.toggleMod('visible');
                });
            }
        }
    }
});

});
