modules.define('popup', function(provide, Popup) {

provide(Popup.declMod({ modName : 'target', modVal : 'position' }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                this
                    .setPosition(50, 50)
                    .setMod('visible');
            }
        }
    }
}));

});
// Side-effect only - modifier is registered on import
export default function() {};
