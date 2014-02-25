modules.define(
    'spec',
    ['input', 'i-bem__dom', 'jquery', 'dom', 'BEMHTML', 'sinon'],
    function(provide, Input, BEMDOM, $, dom, BEMHTML, sinon) {

describe('input', function() {
    var input;

    beforeEach(function() {
        input = buildInput({ block : 'input', val : 'bla' });
    });

    afterEach(function() {
        BEMDOM.destruct(input.domElem);
    });

    describe('focus/blur', function() {
        it('should have "focused" mod on focus', function() {
            input.elem('control').focus();
            input.hasMod('focused').should.be.true;
        });

        it('should not have "focused" mod on blur', function() {
            input.elem('control')
                .focus()
                .blur();
            input.hasMod('focused').should.be.false;
        });

        it('should be focused after "focused" mod set', function() {
            input.setMod('focused');
            dom.containsFocus(input.elem('control')).should.be.true;
        });

        it('should not set "focused" mod if it has "disabled" mod', function() {
            input
                .setMod('disabled')
                .setMod('focused');
            input.hasMod('focused').should.be.false;
        });

        it('should set "focused" mod if input have been focused before init', function() {
            var domElem = $(BEMHTML.apply({ block : 'input' })).appendTo('body');
            domElem.find('.input__control').focus();
            var input = BEMDOM.init(domElem).bem('input');
            input.hasMod('focused').should.be.true;
            BEMDOM.destruct(input.domElem);
        });

        it('should focus control if input already has focused mod before init', function() {
            var input = buildInput({ block : 'input', mods : { focused : true } });
            dom.containsFocus(input.elem('control')).should.be.true;
            BEMDOM.destruct(input.domElem);
        });

        it('should be blured after "focused" mod unset', function() {
            input
                .setMod('focused')
                .delMod('focused');
            dom.containsFocus(input.elem('control')).should.be.false;
        });
    });

    describe('enable/disable', function() {
        it('should set "disabled" property according to "disabled" mod', function() {
            input.setMod('disabled');
            input.elem('control').prop('disabled').should.be.true;

            input.delMod('disabled');
            input.elem('control').prop('disabled').should.be.false;
        });
    });

    describe('val', function() {
        it('should update control elem value when value changed', function() {
            input.setVal('blabla');
            input.elem('control').val().should.be.equal('blabla');
        });

        it('should emit "change" event only when value changed', function() {
            var spy = sinon.spy();
            input.on('change', spy);

            input.setVal('bla');
            spy.should.not.have.been.called;

            input.setVal('blabla');
            spy.should.have.been.calledOnce;
        });

        it('should update value when control value changed', function(done) {
            input.on('change', function(e) {
                e.target.getVal().should.be.equal('new-value');
                done();
            });

            input.elem('control')
                .val('new-value')
                .trigger('input'); // TODO: разобраться с touch, нихера оно не работает без этого при программной установке
        });
    });
});

provide();

function buildInput(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
        .bem('input');
}

});
