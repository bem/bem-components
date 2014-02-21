modules.define(
    'spec',
    ['button', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Button, BEMDOM, $, BEMHTML) {

describe('button', function() {
    var button;

    beforeEach(function() {
        button = BEMDOM.init($(BEMHTML.apply({ block : 'button' })).appendTo('body'))
            .bem('button');
    });

    afterEach(function() {
        BEMDOM.destruct(button.domElem);
    });

    describe('hover', function() {
        it('should have "hovered" mod on mouseover', function() {
            button.domElem.mouseover();
            button.hasMod('hovered').should.be.true;
        });

        it('should delete "hovered" mod on mouseout', function() {
            button.domElem.mouseout();
            button.hasMod('hovered').should.be.false;
        });

        it('should not set "hovered" mod if it has "disabled" mod', function() {
            button
                .setMod('disabled')
                .setMod('hovered');
            button.hasMod('hovered').should.be.false;
        });

        it('should delete "pressed" mod on unset "hovered" mod', function() {
            button
                .setMod('pressed')
                .setMod('hovered')
                .delMod('hovered');
            button.hasMod('pressed').should.be.false;
        });
    });

    describe('pressed', function() {
        it('should set "pressed" mod on "space" or "enter" key pressed when focused', function() {
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
    });
});

provide();

});
