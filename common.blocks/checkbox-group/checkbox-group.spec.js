modules.define(
    'spec',
    ['checkbox-group', 'i-bem__dom', 'jquery', 'dom', 'BEMHTML', 'sinon'],
    function(provide, CheckboxGroup, BEMDOM, $, dom, BEMHTML, sinon) {

describe('checkbox-group', function() {
    var checkboxGroup;

    function buildCheckboxGroup(bemjson) {
        return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
            .bem('checkbox-group');
    }

    beforeEach(function() {
        checkboxGroup = buildCheckboxGroup({
            block : 'checkbox-group',
            name : 'name',
            options : [
                { val : 'val1', label : 'label1' },
                { val : 'val2', label : 'label2', checked : true },
                { val : 'val3', label : 'label3', disabled : true }
            ]
        });
    });

    afterEach(function() {
        BEMDOM.destruct(checkboxGroup.domElem);
    });

    describe('value', function() {
        it('should have correct initial value', function() {
            checkboxGroup.getVal().should.be.eql(['val2']);
        });

        it('should have correct initial empty value', function() {
            BEMDOM.destruct(checkboxGroup.domElem);

            checkboxGroup = buildCheckboxGroup({
                block : 'checkbox-group',
                name : 'name',
                options : [{ val : 'val1', label : 'label1' }]
            });

            checkboxGroup.getVal().should.be.eql([]);
        });

        it('should properly set allowed value', function() {
            var checkboxes = checkboxGroup.getCheckboxes(),
                spy = sinon.spy();

            checkboxGroup
                .on('change', spy)
                .setVal(['val1']);
            checkboxes[0].hasMod('checked').should.be.true;
            checkboxes[1].hasMod('checked').should.be.false;
            checkboxGroup.getVal().should.be.eql(['val1']);
            spy.should.have.been.calledOnce;
        });

        it('should not set wrong value', function() {
            var checkboxes = checkboxGroup.getCheckboxes(),
                spy = sinon.spy();

            checkboxGroup.setVal(['val44']);
            checkboxes[1].hasMod('checked').should.be.true;
            checkboxGroup.getVal().should.be.eql(['val2']);
            spy.should.not.have.been.called;
        });
    });

    describe('focus/blur', function() {
        it('should focus first option', function() {
            checkboxGroup.setMod('focused');
            checkboxGroup.getCheckboxes()[0].hasMod('focused').should.be.true;
        });

        it('should remove "focused" mod from currently focused option', function() {
            checkboxGroup.getCheckboxes()[1].setMod('focused');
            checkboxGroup.delMod('focused');
            checkboxGroup.getCheckboxes()[1].hasMod('focused').should.be.false;
        });
    });
});

provide();

});
