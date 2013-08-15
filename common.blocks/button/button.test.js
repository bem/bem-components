modules.define(
    'test',
    ['i-bem__dom', 'jquery', 'dom', 'BEMHTML', 'sinon'],
    function(provide, BEMDOM, $, dom, BEMHTML, sinon) {

describe('button', function() {
    var button;

    beforeEach(function() {
        button = BEMDOM.init($(BEMHTML.apply({ block: 'button' })).appendTo('body'))
            .bem('button');
    });

    afterEach(function() {
        BEMDOM.destruct(button.domElem);
    });

    describe('focus/blur', function() {
        it('should have "focused" mod on focus', function() {
            button.domElem.focus();
            button.hasMod('focused').should.be.true;
        });

        it('should delete "focused" mod on blur', function() {
            button.domElem
                .focus()
                .blur();
            button.hasMod('focused').should.be.false;
        });

        it('should be focused after "focused" mod set', function() {
            button.setMod('focused');
            dom.containsFocus(button.domElem).should.be.true;
        });

        it('should not set "focused" mod if it has "disabled" mod', function() {
            button
                .setMod('disabled')
                .setMod('focused');
            button.hasMod('focused').should.be.false;
        });

        it('should emit focus event after focused', function() {
            var spy = sinon.spy();

            button
                .on('focus', spy)
                .setMod('focused');

            spy.should.have.been.calledOnce;
        });

        it('should emit blur event after blured', function() {
            var spy = sinon.spy();

            button
                .on('blur', spy)
                .setMod('focused')
                .delMod('focused');

            spy.should.have.been.calledOnce;
        });
    });

    describe('press/release', function() {
        it('should have "pressed" mod on pointerdown', function() {
            button.domElem.trigger($.Event('pointerdown'));
            button.hasMod('pressed').should.be.true;
        });

        it('should delete "pressed" mod on pointerup', function() {
            button.domElem.trigger('pointerup');
            button.hasMod('pressed').should.be.false;
        });

        it('should not set "hovered" mod if it has "disabled" mod', function() {
            button
                .setMod('disabled')
                .setMod('pressed');
            button.hasMod('pressed').should.be.false;
        });

        it('should emit "press" event after pressed', function() {
            var spy = sinon.spy();

            button
                .on('press', spy)
                .setMod('pressed');

            spy.should.have.been.calledOnce;
        });

        it('should emit "release" event after released', function() {
            var spy = sinon.spy();

            button
                .on('release', spy)
                .setMod('pressed')
                .delMod('pressed');

            spy.should.have.been.calledOnce;
        });
    });

    describe('click', function() {
        it('should emit click on "pointerclick" event', function() {
            var spy = sinon.spy();

            button.on('click', spy);
            button.domElem.trigger('pointerclick');

            spy.should.have.been.calledOnce;
        });

        it('should not emit click on "pointerclick" event if disabled', function() {
            var spy = sinon.spy();

            button
                .on('click', spy)
                .setMod('disabled');
            button.domElem.trigger('pointerclick');

            spy.should.not.have.been.called;
        });
    });
});

provide();

});