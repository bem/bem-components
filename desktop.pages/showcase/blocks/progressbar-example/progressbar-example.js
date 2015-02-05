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
        this._onTick = this._onTick || function() {
            var val = this._progressbar.getVal();
            this._progressbar.setVal(val >= 100? 0 : val + 1);
        };

        if(this._button.hasMod('checked')) {
            tick.un('tick', this._onTick, this);
        } else {
            tick
                .on('tick', this._onTick, this)
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
