modules.define(
    'spec',
    ['button', 'i-bem-dom', 'jquery', 'dom', 'BEMHTML'],
    function(provide, Button, bemDom, $, dom, BEMHTML) {

describe('button_togglable_check', function() {
    var button;

    beforeEach(function() {
        button = bemDom.init($(BEMHTML.apply({ block : 'button', mods : { togglable : 'check' } })).appendTo('body'))
            .bem(Button);
    });

    afterEach(function() {
        bemDom.destruct(button.domElem);
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
        it('should switch "checked" mod on "pointerpress"/"pointerrelease" only if "pointerrelease" target is in block', function() {
            function triggerPointerUpPointerDown(onBlock) {
                button.domElem
                    .trigger('pointerpress')
                    .trigger(new $.Event('pointerrelease', {
                        target : onBlock? button.domElem[0] : $('body'),
                        originalEvent : new $.Event('pointerup')
                    }))
                    .trigger('pointerclick');
            }

            triggerPointerUpPointerDown(true);
            button.hasMod('checked').should.be.true;

            triggerPointerUpPointerDown(true);
            button.hasMod('checked').should.be.false;

            triggerPointerUpPointerDown(false);
            button.hasMod('checked').should.be.false;
        });

        it('should update aria-attributes properly', function() {
            button.setMod('checked');
            button.domElem.attr('aria-pressed').should.be.equal('true');
            button.delMod('checked');
            button.domElem.attr('aria-pressed').should.be.equal('false');
        });
    });
});

provide();

});
