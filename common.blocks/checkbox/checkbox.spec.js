modules.define(
    'spec',
    ['checkbox', 'i-bem-dom', 'jquery', 'BEMHTML', 'chai'],
    function(provide, Checkbox, bemDom, $, BEMHTML, chai) {

describe('checkbox', function() {
    var checkbox;

    function buildCheckbox() {
        return bemDom.init($(BEMHTML.apply({
                block : 'checkbox',
                name : 'name',
                val : 'val',
                label : 'label'
            }))
            .appendTo('body'))
            .bem(Checkbox);
    }

    beforeEach(function() {
        checkbox = buildCheckbox();
    });

    afterEach(function() {
        bemDom.destruct(checkbox.domElem);
    });

    describe('checked', function() {
        it('should properly update "control" elem "checked" attr', function() {
            checkbox
                .setMod('checked')
                ._elem('control').domElem.prop('checked').should.be.true;
            checkbox._elem('control').domElem.attr('checked').should.be.equal('checked');

            checkbox
                .delMod('checked')
                ._elem('control').domElem.prop('checked').should.be.false;
            chai.expect(checkbox._elem('control').domElem.attr('checked')).to.be.undefined;
        });

        it('should switch "checked" mod on "change" event', function() {
            checkbox._elem('control').domElem
                .attr('checked', true)
                .trigger('change');
            checkbox.hasMod('checked').should.be.true;

            checkbox._elem('control').domElem
                .removeAttr('checked')
                .trigger('change');
            checkbox.hasMod('checked').should.be.false;
        });
    });
});

provide();

});
