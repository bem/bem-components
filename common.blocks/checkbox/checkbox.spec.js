modules.define(
    'spec',
    ['checkbox', 'i-bem__dom', 'jquery', 'BEMHTML'],
    function(provide, Checkbox, BEMDOM, $, BEMHTML) {

describe('checkbox', function() {
    var checkbox;

    function buildCheckbox() {
        return BEMDOM.init($(BEMHTML.apply({
                block : 'checkbox',
                name : 'name',
                val : 'val',
                label : 'label'
            }))
            .appendTo('body'))
            .bem('checkbox');
    }

    beforeEach(function() {
        checkbox = buildCheckbox();
    });

    afterEach(function() {
        BEMDOM.destruct(checkbox.domElem);
    });

    describe('checked', function() {
        it('should properly update "control" elem "checked" attr', function() {
            checkbox
                .setMod('checked')
                .elem('control').prop('checked').should.be.true;

            checkbox
                .delMod('checked')
                .elem('control').prop('checked').should.be.false;
        });

        it('should switch "checked" mod on "change" event', function() {
            checkbox.elem('control')
                .prop('checked', true)
                .trigger('change');
            checkbox.hasMod('checked').should.be.true;

            checkbox.elem('control')
                .prop('checked', false)
                .trigger('change');
            checkbox.hasMod('checked').should.be.false;
        });
    });
});

provide();

});
