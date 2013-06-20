BEM.DOM.decl('input', /** @lends Block.prototype */ {

    onElemSetMod : {

        'message' : {

            'visibility' : function(elem, modName, modVal) {

                var _this = this,
                    type = _this.getMod(elem, 'type');

                if(type) {
                    var needSetMod = true;
                    modVal || _this.elem('message', 'type', type).each(function() {
                        this != elem[0] && _this.hasMod($(this), 'visibility', 'visible') && (needSetMod = false);
                    });
                    needSetMod && _this.toggleMod('message-' + type, 'yes', '', modVal === 'visible');
                }

            }

        }

    }

}, {

});