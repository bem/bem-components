modules.define('i-bem__dom', ['jquery', 'dom', 'functions'], function(provide, $, dom, functions, BEMDOM) {

BEMDOM.decl({ block : 'button', modName : 'togglable', modVal : true }, {
    onSetMod : {
        'hovered' : {
            '' : functions.noop // prevent default action
        }
    },

    _onPressKeyDown : function() {
        var onKeyUp = function() {
                this
                    .unbindFrom('keyup', onKeyUp)
                    ._keyDowned = false;
            };

        this
            .bindTo('keyup', onKeyUp)
            .toggle();
    }
});

provide(BEMDOM);

});