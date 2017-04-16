modules.define('input', function(provide, Input) {

provide(Input.decl({ modName : 'readonly' }, {
    beforeSetMod : {
        readonly : {
            '' : function() {
                this.elem('control').removeAttr('readonly');
            }
        }
    },
    onSetMod : {
        readonly : {
            'true' : function() {
                this.elem('control').attr('readonly', 'readonly');
            }
        }
    }
}));

});
