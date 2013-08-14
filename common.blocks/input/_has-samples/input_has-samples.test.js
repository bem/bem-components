  modules.define('test', ['i-bem__dom', 'jquery', 'BEMHTML'], function(provide, DOM, $, BEMHTML) {

describe('input_has-samples', function() {
    var input;
    afterEach(function() {
        DOM.destruct(input.domElem);
    });

    it('should change input value', function() {
        var samples = ['text1', 'text2', 'val3'];
        input = buildInput([samples[0], { text : samples[1] }, { text : 'text3', val : samples[2] }]);
        var sampleElems = input.elem('sample');
        sampleElems.length.should.be.equal(3);
        sampleElems.each(function(i) {
            $(this).bem('link').trigger('click');
            input.getVal().should.be.equal(samples[i]);
        });
    });

    it('should set "disabled" mod on links according to self', function() {
        input = buildInput(['text1', 'text2', 'val3']);

        input.setMod('disabled');
        var samples = input.findBlocksInside('link');
        samples.length.should.be.equal(3);
        samples.forEach(function(sample) {
            sample.hasMod('disabled').should.be.true;
        });

        input.delMod('disabled');
        samples.forEach(function(sample) {
            sample.hasMod('disabled').should.be.false;
        });
    });
});

function buildInput(samples) {
    return DOM.init(
            $(BEMHTML.apply({
                block : 'input',
                mods : { 'has-samples' : true },
                samples : samples
            })))
        .appendTo('body')
        .bem('input');
}

provide();

});
