modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('input', {
    onElemSetMod : {
        'message' : {
            'visibility' : function(elem, modName, modVal) {
                var _this = this,
                    type = _this.getMod(elem, 'type');

                if(type) {
                    var needSetMod = true;
                    modVal || _this.elem('message', 'type', type).each(function() {
                        this != elem[0] &&
                            _this.hasMod($(this), 'visibility', 'visible') &&
                                (needSetMod = false);
                    });
                    needSetMod && _this.toggleMod('message-' + type, 'yes', modVal === 'visible');
                }
            }
        }
    }
});

provide(DOM);

});