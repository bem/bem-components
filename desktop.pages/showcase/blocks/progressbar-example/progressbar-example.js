modules.define('progressbar-example',
    ['i-bem-dom', 'tick', 'button', 'progressbar'],
    function(provide, bemDom, tick, Button, Progressbar) {

provide(bemDom.declBlock(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._button = this.findChildBlock(Button);
                this._progressbar = this.findChildBlock(Progressbar);
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
    lazyInit : true,
    onInit : function() {
        this._events(Button).on(
            { modName : 'checked', modVal : '*' },
            this.prototype._progressProcess
        );
    }
}));

});
