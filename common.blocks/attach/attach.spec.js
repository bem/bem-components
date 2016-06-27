modules.define(
    'spec',
    ['attach', 'i-bem-dom', 'button', 'jquery', 'BEMHTML', 'sinon'],
    function(provide, Attach, bemDom, Button, $, BEMHTML, sinon) {

describe('attach', function() {
    var attach;
    beforeEach(function() {
        var bemJson = { block : 'attach', name : 'upload', button : 'file' };
        attach = bemDom.init($(BEMHTML.apply(bemJson)).appendTo('body'))
            .bem(Attach);

        // we need to replace input[@type=file] by input[@type=text] for tests
        var input = attach.findChildElem('control').domElem;
        bemDom.replace(input, '<input class="attach__control" name="' + input.attr('name')  + '"/>');
    });

    afterEach(function() {
        bemDom.destruct(attach.domElem);
    });

    describe('value', function() {
        it('getVal should return actual input\'s value', function() {
            attach.getVal().should.be.equal('');
            setFile('file.png');
            attach.getVal().should.be.equal('file.png');
        });

        it('should emit "change" event after input value changed', function() {
            var spy = sinon.spy();
            attach._events().on('change', spy);
            setFile('file.png');
            spy.should.have.been.calledOnce;
        });

        it('should properly extract file name', function() {
            setFile('\\usr\\local\\file.png');
            attach._elem('text').domElem.text().should.be.equal('file.png');
        });
    });

    describe('clear', function() {
        it('should reset input\'s value', function() {
            setFile('file.png');
            attach.clear();
            attach.getVal().should.be.equal('');
        });

        it('should emit "change" event after clear', function() {
            var spy = sinon.spy();
            setFile('file.png');
            attach._events().on('change', spy);
            attach.clear();
            spy.should.have.been.calledOnce;
            attach.clear();
            spy.should.have.been.calledOnce;
        });

        it('should be called after "pointerclick" on "clear" elem', function() {
            var spy = sinon.spy();
            attach.clear = spy;
            setFile('file.png');
            attach._elem('clear').domElem.trigger('pointerclick');
            spy.should.have.been.calledOnce;
        });
    });

    describe('enable/disable', function() {
        it('should enable/disable button according to self "disabled" state', function() {
            attach.setMod('disabled');
            attach.findChildBlock(Button).hasMod('disabled').should.be.true;

            attach.delMod('disabled');
            attach.findChildBlock(Button).hasMod('disabled').should.be.false;
        });
    });

    function setFile(filePath) {
        attach._elem('control').domElem
            .val(filePath)
            .trigger('change');
    }
});

provide();

});
