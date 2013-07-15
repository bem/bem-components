modules.define('i-bem__dom', function(provide, DOM) {

DOM.decl('input', {
    
    /**
     * Нормализация установки фокуса для IE
     * @private
     */
    _focus : function() {
        var input = this.elem('control')[0];
        if(input.createTextRange && !input.selectionStart) {
            var range = input.createTextRange();
            range.move('character', input.value.length);
            range.select();
        } else {
            input.focus();
        }
    }
});

provide(DOM);

});
