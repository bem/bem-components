modules.define('spec', ['input', 'i-bem__dom', 'jquery', 'BEMHTML'], function(provide, Input, BEMDOM, $, BEMHTML) {

describe('input_has-clear', function() {
    var input;
    afterEach(function() {
        BEMDOM.destruct(input.domElem);
    });

    it('should hide clear elem if value is empty', function() {
        input = buildInput('');
        isClearElemVisible(input).should.be.false;
    });

    it('should show clear elem if value is not empty', function() {
        input = buildInput('bla');
        isClearElemVisible(input).should.be.true;
    });

    it('should change clear elem visibility according to value', function() {
        input = buildInput('');
        input.setVal('bla');
        isClearElemVisible(input).should.be.true;
        input.setVal('');
        isClearElemVisible(input).should.be.false;
    });

    it('should clear input on click', function() {
        input = buildInput('bla');
        input.elem('clear').trigger('pointerclick');
        input.getVal().should.be.equal('');
    });
});

function buildInput(val) {
    return BEMDOM.init(
            $(BEMHTML.apply({
                block : 'input',
                mods : { 'has-clear' : true },
                val : val
            })))
        .appendTo('body')
        .bem('input');
}

function isClearElemVisible(input) {
    return input.hasMod(input.elem('clear'), 'visible');
}

provide();

});
