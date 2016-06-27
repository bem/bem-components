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
                mods : { switcher : 'button' },
                switcher : { block : 'button', mods : { togglable : 'check' }, text : 'button' },
                popup : 'popup'
            }))
            .appendTo(body))
            .bem(Dropdown);
    });

    afterEach(function() {
        bemDom.destruct(dropdown.domElem);
    });

    it('should open on button click', function() {
        dropdown.getSwitcher()._emit('click');
        dropdown.hasMod('opened').should.be.true;
    });

    it('should be synchronized with togglable button', function() {
        dropdown.setMod('opened');
        dropdown.getSwitcher().hasMod('checked').should.be.true;
        dropdown.delMod('opened');
        dropdown.getSwitcher().hasMod('checked').should.be.false;
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
