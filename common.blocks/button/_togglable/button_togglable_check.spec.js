modules.define(
    'spec',
    ['button', 'i-bem__dom', 'jquery', 'dom', 'BEMHTML'],
    function(provide, Button, BEMDOM, $, dom, BEMHTML) {

describe('button_togglable_check', function() {
    var button;

    beforeEach(function() {
        button = BEMDOM.init($(BEMHTML.apply({ block : 'button', mods : { togglable : 'check' } })).appendTo('body'))
            .bem('button');
    });

    afterEach(function() {
        BEMDOM.destruct(button.domElem);
    });

    describe('disabled', function() {
        it('should not remove "pressed" mod while set "disabled" mod', function() {
            button
                .setMod('pressed')
                .setMod('disabled');

            button.hasMod('pressed').should.be.true;
        });

        it('could be pressed while disabled', function() {
            button
                .setMod('disabled')
                .setMod('pressed');

            button.hasMod('pressed').should.be.true;
        });
    });

    describe('check/uncheck', function() {
        it('should switch "checked" mod on "pointerpress"/"pointerreleaase" only if "pointerrelease" target is in block', function() {
            function triggerPointerUpPointerDown(onBlock) {
                button.domElem
                    .trigger('pointerpress')
                    .trigger(new $.Event('pointerrelease', { target : onBlock? button.domElem[0] : $('body') }));
            }

            triggerPointerUpPointerDown(true);
            button.hasMod('checked').should.be.true;
            button.domElem.attr('aria-pressed').should.be.equal('true');

            triggerPointerUpPointerDown(true);
            button.hasMod('checked').should.be.false;
            button.domElem.attr('aria-pressed').should.be.equal('false');

            triggerPointerUpPointerDown(false);
            button.hasMod('checked').should.be.false;
            button.domElem.attr('aria-pressed').should.be.equal('false');
        });
    });
});

provide();

});
