modules.define(
    'test',
    ['i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, BEMDOM, $, BEMHTML) {

describe('input_autofocus_focused', function() {
    it('should set "focused" mod on init', function() {
        var input = BEMDOM.init($(BEMHTML.apply({ block: 'input', mods: { autofocus: 'focused' } })))
                .appendTo('body')
                .bem('input');

        input.hasMod('focused').should.be.true;

        BEMDOM.destruct(input.domElem);
    });
});

provide();

});