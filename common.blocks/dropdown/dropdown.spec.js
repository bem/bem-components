modules.define(
    'spec',
    ['dropdown', 'i-bem__dom', 'jquery', 'BEMHTML', 'sinon'],
    function(provide, Dropdown, BEMDOM, $, BEMHTML, sinon) {

describe('dropdown', function() {
    var body = $('body'),
        dropdown;

    beforeEach(function() {
        dropdown = BEMDOM.init($(BEMHTML.apply({
                block : 'dropdown',
                mods : { switcher : 'custom' },
                switcher : { block : 'custom' },
                popup : 'popup'
            }))
            .appendTo(body))
            .bem('dropdown');
    });

    afterEach(function() {
        BEMDOM.destruct(dropdown.domElem);
    });

    describe('getters', function() {
        it('should return switcher instance', function() {
            dropdown.getSwitcher().should.be.instanceOf(BEMDOM.blocks['custom']);
        });

        it('should return popup instance', function() {
            dropdown.getPopup().should.be.instanceOf(BEMDOM.blocks['popup']);
        });
    });

    describe('open/close', function() {
        it('should show/hide popup on open/close', function() {
            var popup = dropdown.getPopup();

            popup.hasMod('visible').should.be.false;
            dropdown.setMod('opened');
            popup.hasMod('visible').should.be.true;
            dropdown.delMod('opened');
            popup.hasMod('visible').should.be.false;
        });

        it('should not open while disabled', function() {
            dropdown
                .setMod('disabled')
                .setMod('opened')
                .hasMod('opened').should.be.false;
        });
    });

    describe('disable/enable', function() {
        it('should disable/enable switcher when becomes enabled/disabled', function() {
            var switcher = dropdown.getSwitcher();

            switcher.hasMod('disabled').should.be.false;
            dropdown.setMod('disabled');
            switcher.hasMod('disabled').should.be.true;
            dropdown.delMod('disabled');
            switcher.hasMod('disabled').should.be.false;
        });

        it('should hide popup on disable', function() {
            dropdown
                .setMod('opened')
                .setMod('disabled')
                .hasMod('opened').should.be.false;
        });
    });

    describe('destruct', function() {
        it('should destruct properly', function() {
            var spy = sinon.spy();

            dropdown.getPopup().on({ modName : 'js', modVal : '' }, spy);
            dropdown.setMod('opened');
            BEMDOM.destruct(dropdown.domElem);

            spy.should.have.been.calledOnce;
        });
    });
});

provide();

});
