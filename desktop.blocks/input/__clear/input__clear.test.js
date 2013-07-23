modules.define('test', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, DOM, $, BEMHTML) {

describe('input__clear', function() {
    var input;
    afterEach(function() {
        DOM.destruct(input.domElem);
    });

    it('should clear input on click', function() {
        input = buildInput('bla');
        input.elem('clear').trigger('leftclick');
        input.val().should.be.equal('');
    });

    it('should be focused on box click', function() {
        input = buildInput('');
        input.elem('box').trigger('leftclick');
        input.hasMod('focused', 'yes').should.be.true;
    });
});

function buildInput(val) {
    return DOM.init(
            $(BEMHTML.apply({
                block: 'input',
                content: [{ elem: 'control' }],
                value: val
            })))
        .appendTo('body')
        .bem('input');
}

provide();

});