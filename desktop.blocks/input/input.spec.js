modules.define(
    'spec',
    ['input', 'i-bem-dom', 'jquery', 'dom', 'BEMHTML'],
    function(provide, Input, bemDom, $, dom, BEMHTML) {

describe('input', function() {
    var input;

    beforeEach(function() {
        input = bemDom.init($(BEMHTML.apply({ block : 'input', val : 'bla' })).appendTo('body'))
            .bem(Input);
    });

    afterEach(function() {
        bemDom.destruct(input.domElem);
    });

    describe('focus/blur', function() {
        it('should be focused after "focused" mod set', function() {
            input.setMod('focused');
            dom.containsFocus(input._elem('control').domElem).should.be.true;
        });
    });
});

provide();

});
