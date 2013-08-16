modules.define(
    'test',
    ['i-bem__dom', 'jquery', 'dom', 'BEMHTML', 'sinon'],
    function(provide, BEMDOM, $, dom, BEMHTML, sinon) {

describe('attach', function() {
    var attach;
    beforeEach(function() {
        var bemJson = { block : 'attach', name : 'upload', buttonText : 'file' };
        attach = BEMDOM.init($(BEMHTML.apply(bemJson)).appendTo('body'))
            .bem('attach');

        // we need to replace input[@type=file] by input[@type=text] for tests
        var input = attach.findElem('control');
        input.replaceWith('<input type="text" class="attach__control" name="' + input.attr('name')  + '"/>');
    });

    afterEach(function() {
        BEMDOM.destruct(attach.domElem);
    });

    describe('getName', function() {
        it('should return input\'s name', function() {
            attach.getName().should.be.equal('upload');
        });
    });

    describe('getVal', function() {
        it('should return input\'s value', function() {
            setFile('/file.png');
            attach.getVal().should.be.equal('/file.png');
        });
    });

    describe('clear', function() {
        it('should reset input\'s value', function() {
            setFile('/file.png');
            attach.clear();
            attach.getVal().should.be.equal('');
        });

        it('should emit "change" event after clear', function() {
            var spy = sinon.spy();
            setFile('/file.png');
            attach.on('change', spy);
            attach.clear();
            spy.should.have.been.calledOnce;
            attach.clear();
            spy.should.have.been.calledOnce;
        });

        it('should be called after "pointerclick" on "clear" elem', function() {
            var spy = sinon.spy();
            attach.clear = spy;
            setFile('/file.png');
            attach.elem('clear').trigger('pointerclick');
            spy.should.have.been.calledOnce;
        });
    });

    function setFile(filePath) {
        attach.elem('control')
            .val(filePath)
            .trigger('change');
    }
});

provide();

});