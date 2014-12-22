modules.define('progressbar-example', ['i-bem__dom', 'tick'], function(provide, BEMDOM, tick) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._button = this.findBlockInside('button');
                this._progressbar = this.findBlockInside('progressbar');
            }
        }
    },

    _progressProcess : function() {
        var i = this._progressbar.getVal(),
            isChecked = this._button.hasMod('checked');
        if (isChecked) {
            tick.un('tick');
        } else {
            tick
                .on('tick', function(){
                    (i > 100) && (i = 0);
                    this._progressbar.setVal(i++);
                }, this)
                .start();
        }
    }

}, {
    live : function() {
        this.liveInitOnBlockInsideEvent(
            { modName : 'checked', modVal : '*' },
            'button',
            this.prototype._progressProcess
        );
    }
}));

});
