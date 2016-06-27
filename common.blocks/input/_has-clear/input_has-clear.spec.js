modules.define('spec', ['input', 'i-bem-dom', 'jquery', 'BEMHTML'], function(provide, Input, bemDom, $, BEMHTML) {

describe('input_has-clear', function() {
    var input;
    afterEach(function() {
        bemDom.destruct(input.domElem);
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
        input._elem('clear').domElem.trigger('pointerclick');
        input.getVal().should.be.equal('');
    });
});

function buildInput(val) {
    return bemDom.init(
            $(BEMHTML.apply({
                block : 'input',
                mods : { 'has-clear' : true },
                val : val
            })))
        .appendTo('body')
        .bem(Input);
}

function isClearElemVisible(input) {
    return input._elem('clear').hasMod('visible');
}

provide();

});
