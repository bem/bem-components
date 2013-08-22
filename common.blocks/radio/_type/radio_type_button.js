modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl({ block : 'radio', modName : 'type', modVal : 'button' }, {
    _update : function() {
        var controls = this.elem('control');
        this.findBlocksInside('button').forEach(function(button, i) {
            var control = controls.eq(i);
            button
                .setMod('checked', control.prop('checked'))
                .setMod('disabled', control.prop('disabled'));
        });
    }
});

provide(BEMDOM);

});