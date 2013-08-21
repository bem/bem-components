modules.define('i-bem__dom', function(provide, BEMDOM) {

BEMDOM.decl({ block : 'radio', modName : 'type', modVal : 'button' }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);
                BEMDOM.blocks['button'].on(this.domElem, 'check', this._onButtonCheck, this);
            },

            '' : function() {
                this.__base.apply(this, arguments);
                BEMDOM.blocks['button'].un(this.domElem, 'check', this._onButtonCheck, this);
            }
        }
    },

    _onButtonCheck : function(e) {
        this.setVal(this.findElem(e.target.domElem, 'control').val());
    },

    _syncControlContainer : function() {
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