modules.define('input', ['ua'], function(provide, ua, Input) {

if(!ua.msie || ua.version >= 10) {
    provide(Input);
    return;
}

provide(Input.decl('input', {
    /**
     * Normalizes focus for IE
     */
    _focus : function() {
        var input = this.elem('control')[0];
        if(!input.selectionStart) {
            var range = input.createTextRange();
            range.move('character', input.value.length);
            range.select();
        }
    }
}, {
    live : function() {
        this.liveBindTo('keyup cut paste', function() {
            // nextTick because when `cut` and `paste` events callbacks are executed, real value is not changed
            this.nextTick(this._tryToUpdateVal);
        });

        return this.__base();
    }
}));

});
