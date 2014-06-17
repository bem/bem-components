modules.define(
    'spec',
    ['base-control', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, baseControl, BEMDOM, $, BEMHTML) {

describe('base-control', function() {
    var baseControl;

    beforeEach(function() {
        baseControl = buildControl().bem('base-control');
    });

    afterEach(function() {
        BEMDOM.destruct(baseControl.domElem);
    });

    describe('hover', function() {
        it('should have "hovered" mod on mouseover', function() {
            baseControl.domElem.mouseover();
            baseControl.hasMod('hovered').should.be.true;
        });

        it('should delete "hovered" mod on mouseout', function() {
            baseControl.setMod('hovered');
            baseControl.domElem.mouseout();
            baseControl.hasMod('hovered').should.be.false;
        });

        it('should not set "hovered" mod if it has "disabled" mod', function() {
            baseControl
                .setMod('disabled')
                .setMod('hovered');
            baseControl.hasMod('hovered').should.be.false;
        });

        it('should delete "hovered" mod on disable', function() {
            baseControl
                .setMod('hovered')
                .setMod('disabled')
                .hasMod('hovered')
                    .should.be.false;
        });
    });
});

provide();

function buildControl() {
    return BEMDOM.init($(BEMHTML.apply({
        block : 'base-control',
        js : true,
        tag : 'span',
        content : {
            elem : 'control',
            tag : 'input',
            attrs : { name : 'blah' }
        }
    })).appendTo('body'));
}

});
