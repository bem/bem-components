modules.define('test', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, DOM, $, BEMHTML) {

describe('input__clear', function() {
    it('should clear input on pointerdown', function() {
        var input = DOM.init(
                $(BEMHTML.apply({
                    block: 'input',
                    content: { elem: 'control' },
                    value: 'bla'
                })))
            .appendTo('body')
            .bem('input');

        input.elem('clear').trigger('pointerdown');
        input.val().should.be.equal('');
    });
});

provide();

});