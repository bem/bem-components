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

    _onButtonBeforeUncheck : function(e) {
        e.preventDefault();
    },

    _onButtonCheck : function(e) {
        this.setVal(this.findElem(e.target.domElem, 'control').val());
    },

    _syncControlContainer : function(control) {
        var buttonToCheck = this.findBlockOutside(control, 'button');
        this.findBlocksInside('button').forEach(function(button) {
            button.setMod('checked', buttonToCheck === button);
        });
    }
});

provide(BEMDOM);

});