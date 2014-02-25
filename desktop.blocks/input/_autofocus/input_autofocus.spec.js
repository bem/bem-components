modules.define(
    'spec',
    ['input', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Input, BEMDOM, $, BEMHTML) {

describe('input_autofocus', function() {
    var input;

    beforeEach(function() {
        input = BEMDOM.init(
                $(BEMHTML.apply({
                    block : 'input',
                    mods : { autofocus : true },
                    val : 'bla'
                })))
            .appendTo('body')
            .bem('input');
    });

    afterEach(function() {
        BEMDOM.destruct(input.domElem);
    });

    it('should set "focused" mod at first time when text key pressed', function() {
        var doc = $(document).trigger($.Event('keydown', { charCode : 48 }));
        input.hasMod('focused').should.be.true;
        input.getVal().should.be.equal('bla ');
        input.delMod('focused');

        doc.trigger($.Event('keydown', { charCode : 48 }));
        input.hasMod('focused').should.be.false;
        input.getVal().should.be.equal('bla ');
    });

    it('should not set "focused" mod if not text key pressed', function() {
        $(document).trigger($.Event('keydown', { charCode : 42 }));
        input.hasMod('focused').should.be.false;
        input.getVal().should.be.equal('bla');
    });
});

provide();

});
