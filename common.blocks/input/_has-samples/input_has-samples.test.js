  modules.define('test', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, DOM, $, BEMHTML) {

describe('input_has-samples', function() {
    var input;
    afterEach(function() {
        DOM.destruct(input.domElem);
    });

    it('should change input value', function() {
        var samples = ['text1', 'text2', 'val3'];
        input = buildInput([samples[0], { text: samples[1] }, { text: 'text3', val: samples[2] }]);
        var sampleElems = input.elem('sample');
        sampleElems.length.should.be.equal(3);
        sampleElems.each(function(i) {
            $(this).bem('link').trigger('click');
            input.val().should.be.equal(samples[i]);
        });
    });
});

function buildInput(samples) {
    return DOM.init(
            $(BEMHTML.apply({
                block: 'input',
                mods: { 'has-samples': true },
                samples: samples
            })))
        .appendTo('body')
        .bem('input');
}

provide();

});
