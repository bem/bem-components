modules.define('modal-example', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._modal = this.findBlockInside('modal');

                this.findBlockInside('link').on('click', function() {
                    this._modal.toggleMod('visible');
                }, this);
            }
        }
    }
}));

});
