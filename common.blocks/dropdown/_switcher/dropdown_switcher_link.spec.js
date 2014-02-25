modules.define(
    'spec',
    ['dropdown', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Dropdown, BEMDOM, $, BEMHTML) {

describe('dropdown', function() {
    var body = $('body'),
        dropdown;

    beforeEach(function() {
        dropdown = BEMDOM.init($(BEMHTML.apply({
                block : 'dropdown',
                mods : { switcher : 'link' },
                switcher : 'link',
                popup : 'popup'
            }))
            .appendTo(body))
            .bem('dropdown');
    });

    afterEach(function() {
        BEMDOM.destruct(dropdown.domElem);
    });

    it('should open on button click', function() {
        dropdown.getSwitcher().emit('click');
        dropdown.hasMod('opened').should.be.true;
    });
});

provide();

});
