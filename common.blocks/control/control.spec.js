modules.define(
    'spec',
    ['i-bem__dom', 'control', 'jquery', 'dom', 'objects', 'next-tick', 'BEMHTML', 'chai'],
    function(provide, BEMDOM, Control, $, dom, objects, nextTick, BEMHTML, chai) {

var expect = chai.expect;

describe('control', function() {
    var bemjson = {
            block : 'control',
            js : true,
            tag : 'span',
            content : {
                elem : 'control',
                tag : 'input',
                attrs : { name : 'blah' }
            }
        },
        control, controlElem;

    beforeEach(function() {
        control = buildControl(bemjson);
        controlElem = control.elem('control');
    });

    afterEach(function() {
        BEMDOM.destruct(control.domElem);
    });

    describe('name', function() {
        it('getName should return name of the control', function() {
            control.getName().should.be.equal('blah');
        });

        it('getName should return an empty string for non inputs', function() {
            // NOTE: we're replacing `<input>` tag with `<span>`
            var controlElem = control.findElem('control');
            controlElem.replaceWith('<span class="' + controlElem[0].className + '" tabindex="0">Blah</span>');
            control.dropElemCache();

            control.getName().should.be.equal('');
        });
    });

    describe('value', function() {
        it('getVal should return value of the control', function() {
            controlElem.val('blah-blah');
            control.getVal().should.be.equal('blah-blah');
        });
    });

    describe('focus', function() {
        it('should synchronize focus state with DOM-focus', function() {
            control.hasMod('focused').should.be.false;

            controlElem.focus();
            control.hasMod('focused').should.be.true;

            controlElem.blur();
            control.hasMod('focused').should.be.false;
        });

        it('should synchronize DOM-focus with focus state', function() {
            control.hasMod('focused').should.be.false;

            control.setMod('focused');
            dom.getFocused()[0].should.be.equal(controlElem[0]);

            control.delMod('focused');
            dom.getFocused()[0].should.not.be.equal(controlElem[0]);
        });

        it('should set focus state if DOM-focus has been set before init', function() {
            var domElem = $(BEMHTML.apply(bemjson)).appendTo('body');
            domElem.find('.' + Control.buildClass('control')).focus();

            var control = BEMDOM.init(domElem).bem('control');
            control.hasMod('focused').should.be.true;

            BEMDOM.destruct(control.domElem);
        });

        it('should have DOM-focus if initialized with focus state', function() {
            var bemJson = objects.extend({}, bemjson);
            bemJson.mods = { focused : true };

            var control = buildControl(bemJson);
            dom.containsFocus(control.elem('control')).should.be.true;
            BEMDOM.destruct(control.domElem);
        });
    });

    describe('disable', function() {
        it('should drop focus state on disabling', function() {
            control
                .setMod('focused')
                .setMod('disabled')
                .hasMod('focused').should.be.false;
        });

        it('should not set focus state if disabled', function() {
            control
                .setMod('disabled')
                .setMod('focused')
                .hasMod('focused').should.be.false;
        });

        it('should react on disabling', function() {
            controlElem.prop('disabled').should.be.false;
            expect(controlElem.attr('disabled')).to.be.undefined;

            control.setMod('disabled');
            controlElem.prop('disabled').should.be.true;
            controlElem.attr('disabled').should.be.equal('disabled');

            control.delMod('disabled');
            controlElem.prop('disabled').should.be.false;
            expect(controlElem.attr('disabled')).to.be.undefined;
        });
    });
});

provide();

function buildControl(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body')).bem('control');
}

});
