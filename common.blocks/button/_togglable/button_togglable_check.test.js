modules.define(
    'test',
    ['i-bem__dom', 'jquery', 'dom', 'BEMHTML', 'sinon'],
    function(provide, BEMDOM, $, dom, BEMHTML, sinon) {

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

        it('may be pressed while disabled', function() {
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

            triggerPointerUpPointerDown(true);
            button.hasMod('checked').should.be.false;

            triggerPointerUpPointerDown(false);
            button.hasMod('checked').should.be.false;
        });

        it('should emit "check" event after pressed', function() {
            var spy = sinon.spy();

            button
                .on('check', spy)
                .setMod('checked');

            spy.should.have.been.calledOnce;
        });

        it('should emit "uncheck" event after released', function() {
            var spy = sinon.spy();

            button
                .on('uncheck', spy)
                .setMod('checked')
                .delMod('checked');

            spy.should.have.been.calledOnce;
        });
    });
});

provide();

});
