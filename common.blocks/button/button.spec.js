modules.define(
    'spec',
    ['button', 'i-bem__dom', 'jquery', 'dom', 'BEMHTML', 'sinon'],
    function(provide, Button, BEMDOM, $, dom, BEMHTML, sinon) {

describe('button', function() {
    var button;

    beforeEach(function() {
        button = BEMDOM.init($(BEMHTML.apply({ block : 'button' })).appendTo('body'))
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

        it('should be focused on press', function() {
            button.hasMod('focused').should.be.false;
            button.domElem.trigger('pointerpress');
            button.hasMod('focused').should.be.true;
        });

        it('should refocus itself on self click', function(done) {
            // NOTE: some browsers (at least FF, Safari) trigger blur while button is clicked
            button.setMod('focused');
            button.domElem
                .trigger('pointerpress')
                .trigger('blur');

            setTimeout(function() {
                button.hasMod('focused').should.be.true;
                done();
            }, 30);
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

            button.domElem.trigger($.Event('keydown', { keyCode : 32 }));
            button.hasMod('pressed').should.be.true;
            button.domElem.trigger('keyup');
            button.hasMod('pressed').should.be.false;

            button.domElem.trigger($.Event('keydown', { keyCode : 13 }));
            button.hasMod('pressed').should.be.true;
        });

        it('should not be pressed on pointerrelease', function() {
            button.domElem.trigger('pointerrelease');
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
        it('should set "disabled" property according to "disabled" mod', function() {
            button.setMod('disabled');
            button.domElem.prop('disabled').should.be.true;

            button.delMod('disabled');
            button.domElem.prop('disabled').should.be.false;
        });

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
    });

    describe('click', function() {
        it('should emit click on release on self', function() {
            var spy = sinon.spy();

            button
                .on('click', spy)
                .domElem
                    .trigger('pointerpress')
                    .trigger('pointerrelease');

            spy.should.have.been.calledOnce;
        });

        it('should emit click on release outside self', function() {
            var spy = sinon.spy();

            button.on('click', spy);
            button.domElem.trigger('pointerpress');
            $('body').trigger('pointerrelease');

            spy.should.not.have.been.called;
        });

        it('should emit click on "space" or "enter"', function() {
            var spy = sinon.spy();

            button
                .on('click', spy)
                .setMod('focused')
                .domElem
                    .trigger($.Event('keydown', { keyCode : 32 }))
                    .trigger('keyup')
                    .trigger($.Event('keydown', { keyCode : 13 }))
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
                    .trigger('pointerrelease');

            spy.should.not.have.been.called;
        });
    });
});

provide();

});
