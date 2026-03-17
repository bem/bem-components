import Input from 'bem:input';
import bemDom from 'bem:i-bem-dom';
import $ from 'bem:jquery';
import dom from 'bem:dom';


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
