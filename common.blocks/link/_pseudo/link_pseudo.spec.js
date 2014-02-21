modules.define(
    'spec',
    ['link', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Link, BEMDOM, $, BEMHTML) {

describe('link_pseudo', function() {
    var link;

    beforeEach(function() {
        link = BEMDOM.init(
                $(BEMHTML.apply({
                    block : 'link',
                    mods : { pseudo : true }
                })))
            .appendTo('body')
            .bem('link');
    });

    afterEach(function() {
        BEMDOM.destruct(link.domElem);
    });

    it('should always prevent default action', function() {
        var e = $.Event('pointerclick');
        link.domElem.trigger(e);
        e.isDefaultPrevented().should.be.true;
    });
});

provide();

});
