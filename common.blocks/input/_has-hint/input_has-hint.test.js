modules.define('test', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, DOM, $, BEMHTML) {

describe('input_has-hint', function() {
    var input;
    afterEach(function() {
        DOM.destruct(input.domElem);
    });

    it('should hide hint if value is not empty', function() {
        input = buildInput('bla');
        isHintVisible(input).should.be.false;
    });

    it('should show hint if value is empty', function() {
        input = buildInput('');
        isHintVisible(input).should.be.true;
    });

    it('should change hint visibility according to value', function() {
        input = buildInput('');
        input.setVal('bla');
        isHintVisible(input).should.be.false;
        input.setVal('');
        isHintVisible(input).should.be.true;
    });
});

function buildInput(val) {
    return DOM.init(
            $(BEMHTML.apply({
                block : 'input',
                mods : { 'has-hint' : true },
                hint : 'hint',
                val : val
            })))
        .appendTo('body')
        .bem('input');
}

function isHintVisible(input) {
    return input.hasMod(input.elem('hint'), 'visible');
}

provide();

});
