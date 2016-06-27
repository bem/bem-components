modules.define(
    'spec',
    ['dropdown', 'i-bem-dom', 'jquery', 'BEMHTML'],
    function(provide, Dropdown, bemDom, $, BEMHTML) {

describe('dropdown', function() {
    var body = $('body'),
        dropdown;

    beforeEach(function() {
        dropdown = bemDom.init($(BEMHTML.apply({
                block : 'dropdown',
                mods : { switcher : 'link' },
                switcher : 'link',
                popup : 'popup'
            }))
            .appendTo(body))
            .bem(Dropdown);
    });

    afterEach(function() {
        bemDom.destruct(dropdown.domElem);
    });

    it('should open on link click', function() {
        dropdown.getSwitcher()._emit('click');
        dropdown.hasMod('opened').should.be.true;
    });

    it('should update "aria-expanded" attribute properly', function() {
        var switcher = dropdown.getSwitcher();

        switcher.domElem.attr('aria-expanded').should.be.equal('false');
        dropdown.setMod('opened');
        switcher.domElem.attr('aria-expanded').should.be.equal('true');
        dropdown.delMod('opened');
        switcher.domElem.attr('aria-expanded').should.be.equal('false');
    });
});

provide();

});
