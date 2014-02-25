modules.define(
    'spec',
    ['button', 'i-bem__dom', 'chai', 'jquery', 'BEMHTML'],
    function(provide, Button, BEMDOM, chai, $, BEMHTML) {

var expect = chai.expect;

describe('button_type_link', function() {
    var button;

    beforeEach(function() {
        button = buildButton({
            block : 'button',
            mods : { type : 'link' },
            url : '/'
        });
    });

    afterEach(function() {
        BEMDOM.destruct(button.domElem);
    });

    describe('url', function() {
        it('should properly gets url', function() {
            button.domElem.attr('href').should.be.equal('/');
            button.getUrl().should.be.equal('/');
        });

        it('should properly sets url', function() {
            button.setUrl('/bla');
            button.domElem.attr('href').should.be.equal('/bla');
            button.getUrl().should.be.equal('/bla');
        });
    });

    describe('disabled', function() {
        it('should remove "href" attribute if disabled before init', function() {
            BEMDOM.destruct(button.domElem); // we need to destruct default button from beforeEach
            button = buildButton({
                block : 'button',
                mods : { type : 'link', disabled : true },
                url : '/'
            });
            button.getUrl().should.be.equal('/');
            expect(button.domElem.attr('href')).to.be.undefined;
        });

        it('should remove "href" attribute on disable', function() {
            button.setMod('disabled');
            expect(button.domElem.attr('href')).to.be.undefined;

            button.delMod('disabled');
            button.domElem.attr('href').should.be.equal('/');
        });
    });

    function buildButton(bemjson) {
        return BEMDOM.init($(BEMHTML.apply(bemjson))
            .appendTo('body'))
            .bem('button');
    }
});

provide();

});
