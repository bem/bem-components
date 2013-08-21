modules.define(
    'test',
    ['i-bem__dom', 'jquery', 'dom', 'BEMHTML', 'sinon'],
    function(provide, BEMDOM, $, dom, BEMHTML, sinon) {

describe('button', function() {
    var button;

    beforeEach(function() {
        button = BEMDOM.init($(BEMHTML.apply({ block : 'button', mods : { toggle : 'check' } })).appendTo('body'))
            .bem('button');
    });

    afterEach(function() {
        BEMDOM.destruct(button.domElem);
    });

    describe('disabled', function() {
        it('should remove not "pressed" mod while set "disabled" mod', function() {
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