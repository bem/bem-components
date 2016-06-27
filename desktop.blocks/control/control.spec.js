modules.define(
    'spec',
    ['control', 'i-bem-dom', 'jquery', 'BEMHTML'],
    function(provide, Control, bemDom, $, BEMHTML) {

describe('control', function() {
    var control;

    beforeEach(function() {
        control = bemDom.init($(BEMHTML.apply({
            block : 'control',
            js : true,
            tag : 'span',
            content : {
                elem : 'control',
                tag : 'input',
                attrs : { name : 'blah' }
            }
        })).appendTo('body')).bem(Control);
    });

    afterEach(function() {
        bemDom.destruct(control.domElem);
    });

    describe('hover', function() {
        it('should have "hovered" mod on mouseover', function() {
            control.domElem.mouseover();
            control.hasMod('hovered').should.be.true;
        });

        it('should delete "hovered" mod on mouseout', function() {
            control.setMod('hovered');
            control.domElem.mouseout();
            control.hasMod('hovered').should.be.false;
        });

        it('should not set "hovered" mod if it has "disabled" mod', function() {
            control
                .setMod('disabled')
                .setMod('hovered');
            control.hasMod('hovered').should.be.false;
        });

        it('should delete "hovered" mod on disable', function() {
            control
                .setMod('hovered')
                .setMod('disabled')
                .hasMod('hovered')
                    .should.be.false;
        });
    });
});

provide();

});
