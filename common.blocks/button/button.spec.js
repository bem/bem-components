modules.define(
    'spec',
    ['button', 'i-bem__dom', 'jquery', 'BEMHTML', 'sinon', 'keyboard__codes', 'chai'],
    function(provide, Button, BEMDOM, $, BEMHTML, sinon, keyCodes, chai) {

var expect = chai.expect;

describe('button', function() {
    var button;

    beforeEach(function() {
        button = BEMDOM.init($(BEMHTML.apply({ block : 'button', text : 'foo' })).appendTo('body'))
            .bem('button');
    });

    afterEach(function() {
        BEMDOM.destruct(button.domElem);
    });

    describe('focus/blur', function() {
        it('should be focused on pressrelease on itself', function() {
            button.hasMod('focused').should.be.false;
            button.domElem
                .trigger('pointerpress')
                .trigger(createPointerrelease());
            button.hasMod('focused').should.be.true;
        });

        it('should not be focused on pressrelease on outside', function() {
            button.hasMod('focused').should.be.false;
            button.domElem.trigger('pointerpress');
            $('body').trigger(createPointerrelease());
            button.hasMod('focused').should.be.false;
        });
    });

    describe('press/release', function() {
        it('should be pressed on pointerpress', function() {
            button.domElem.trigger($.Event('pointerpress'));
            button.hasMod('pressed').should.be.true;
        });

        it('should be pressed on "space" or "enter" key when focused', function() {
            button.setMod('focused');
            button.domElem.trigger($.Event('keydown', { keyCode : 22 }));
            button.hasMod('pressed').should.be.false;
            button.domElem.trigger('keyup');

            button.domElem.trigger($.Event('keydown', { keyCode : keyCodes.SPACE }));
            button.hasMod('pressed').should.be.true;
            button.domElem.trigger('keyup');
            button.hasMod('pressed').should.be.false;

            button.domElem.trigger($.Event('keydown', { keyCode : keyCodes.ENTER }));
            button.hasMod('pressed').should.be.true;
        });

        it('should not be pressed on pointerrelease', function() {
            button.domElem.trigger(createPointerrelease());
            button.hasMod('pressed').should.be.false;
        });

        it('should not be pressed while disabled', function() {
            button
                .setMod('disabled')
                .setMod('pressed')
                .hasMod('pressed')
                    .should.be.false;
        });
    });

    describe('enable/disable', function() {
        it('should remove "pressed" mod while set "disabled" mod', function() {
            button
                .setMod('pressed')
                .setMod('disabled');

            button.hasMod('pressed').should.be.false;
        });

        it('may not be pressed while disabled', function() {
            button
                .setMod('disabled')
                .setMod('pressed');

            button.hasMod('pressed').should.be.false;
        });

        it('should set/remove "aria-disabled" attribute properly', function () {
            button
                .setMod('disabled')
                .domElem.attr('aria-disabled').should.be.equal('true');

            button.delMod('disabled');
            expect(button.domElem.attr('aria-disabled')).to.be.undefined;
        });
    });

    describe('click', function() {
        it('should emit click on release on self', function() {
            var spy = sinon.spy();

            button
                .on('click', spy)
                .domElem
                    .trigger('pointerpress')
                    .trigger(createPointerrelease());

            spy.should.have.been.calledOnce;
        });

        it('should not emit click on pointercancel', function() {
            var spy = sinon.spy();

            button
                .on('click', spy)
                .domElem
                    .trigger('pointerpress')
                    .trigger(createPointerrelease('pointercancel'));

            spy.should.not.have.been.called;
        });

        it('should emit click on release outside self', function() {
            var spy = sinon.spy();

            button.on('click', spy);
            button.domElem.trigger('pointerpress');
            $('body').trigger(createPointerrelease());

            spy.should.not.have.been.called;
        });

        it('should emit click on "space" or "enter"', function() {
            var spy = sinon.spy();

            button
                .on('click', spy)
                .setMod('focused')
                .domElem
                    .trigger($.Event('keydown', { keyCode : keyCodes.SPACE }))
                    .trigger('keyup')
                    .trigger($.Event('keydown', { keyCode : keyCodes.ENTER }))
                    .trigger('keyup');

            spy.should.have.been.calledTwice;
        });

        it('should not emit click on release event if disabled', function() {
            var spy = sinon.spy();

            button
                .on('click', spy)
                .setMod('disabled')
                .domElem
                    .trigger('pointerpress')
                    .trigger(createPointerrelease());

            spy.should.not.have.been.called;
        });
    });

    describe('setText/getText', function() {
        it('should return text of the button', function() {
            button.getText().should.be.equal('foo');
        });

        it('should set text to the button', function() {
            button.setText('bar');
            button.elem('text').text().should.be.equal('bar');
        });
    });
});

provide();

function createPointerrelease(originalEventName) {
    return new $.Event('pointerrelease', { originalEvent : new $.Event(originalEventName || 'pointerup') });
}

});
