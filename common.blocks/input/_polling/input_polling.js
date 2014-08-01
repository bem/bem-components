modules.define('input', ['tick', 'idle'], function(provide, tick, idle, Input) {

var instances = [],
    boundToTick,
    bindToTick = function() {
        boundToTick = true;
        tick
            .on('tick', update)
            .start();
        idle
            .on({
                idle : function() {
                    tick.un('tick', update);
                },
                wakeup : function() {
                    tick.on('tick', update);
                }
            })
            .start();
    },
    update = function() {
        var instance, i = 0;
        while(instance = instances[i++]) {
            instance.setVal(instance.elem('control').val());
        }
    };

provide(Input.decl({ modName : 'polling', modVal : true }, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.__base.apply(this, arguments);

                boundToTick || bindToTick();

                this._instanceIndex = instances.push(this) - 1;
            },

            '' : function() {
                this.__base.apply(this, arguments);

                instances.splice(this._instanceIndex, 1);
                var i = this._instanceIndex, instance;
                while(instance = instances[i++]) --instance._instanceIndex;
            }
        }
    }
}));

});