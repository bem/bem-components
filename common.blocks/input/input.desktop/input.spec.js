modules.define(
    'spec',
    ['input', 'i-bem__dom', 'jquery', 'dom', 'BEMHTML'],
    function(provide, Input, BEMDOM, $, dom, BEMHTML) {

describe('input', function() {
    var input;

    beforeEach(function() {
        input = BEMDOM.init($(BEMHTML.apply({ block : 'input', val : 'bla' })).appendTo('body'))
            .bem('input');
    });

    afterEach(function() {
        BEMDOM.destruct(input.domElem);
    });

    describe('focus/blur', function() {
        it('should be focused after "focused" mod set', function() {
            input.setMod('focused');
            dom.containsFocus(input.elem('control')).should.be.true;
        });
    });
});

provide();

});
