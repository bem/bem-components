modules.define(
    'spec',
    ['input', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Input, BEMDOM, $, BEMHTML) {

describe('input_has-clear', function() {
    var input;
    afterEach(function() {
        BEMDOM.destruct(input.domElem);
    });

    it('should be focused on box click', function() {
        input = buildInput('');
        input.elem('box').trigger('pointerclick');
        input.hasMod('focused').should.be.true;
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

provide();

});
