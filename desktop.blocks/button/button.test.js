modules.define(
    'test',
    ['i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, BEMDOM, $, BEMHTML) {

describe('button', function() {
    var button;

    beforeEach(function() {
        button = BEMDOM.init($(BEMHTML.apply({ block: 'button' })).appendTo('body'))
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
});

provide();

});