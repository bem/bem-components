import Input from 'bem:input';
import bemDom from 'bem:i-bem-dom';
import $ from 'bem:jquery';


describe('input_has-clear', function() {
    var input;
    afterEach(function() {
        bemDom.destruct(input.domElem);
    });

    it('should be focused on box click', function() {
        input = buildInput('');
        input._elem('box').domElem.trigger('pointerclick');
        input.hasMod('focused').should.be.true;
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


