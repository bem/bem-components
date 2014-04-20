modules.define(
    'spec',
    ['i-bem__dom', 'base-control', 'jquery', 'dom', 'objects', 'next-tick', 'BEMHTML'],
    function(provide, BEMDOM, BaseControl, $, dom, objects, nextTick, BEMHTML) {

describe('base-control', function() {
    var bemjson = {
            block : 'base-control',
            js : true,
            tag : 'span',
            content : {
                elem : 'control',
                tag : 'input',
                attrs : { name : 'blah' }
            }
        },
        baseControl, control;

    beforeEach(function() {
        baseControl = buildControl(bemjson).bem('base-control');
        control = baseControl.elem('control');
    });

    afterEach(function() {
        BEMDOM.destruct(baseControl.domElem);
    });

    describe('name', function() {
        it('getName should return control\'s name', function() {
            baseControl.getName().should.be.equal('blah');
        });

        it('getName should return an empty string for non inputs', function() {
            // NOTE: we're replacing `<input>` tag with `<span>`
            var control = baseControl.findElem('control');
            control.replaceWith('<span class="' + control[0].className + '" tabindex="0">Blah</span>');
            baseControl.dropElemCache();

            baseControl.getName().should.be.equal('');
        });
    });

    describe('value', function() {
        it('getVal should return control\'s value', function() {
            control.val('blah-blah');
            baseControl.getVal().should.be.equal('blah-blah');
        });
    });

    describe('focus', function() {
        it('should synchronize focus state with DOM-focus', function() {
            baseControl.hasMod('focused').should.be.false;

            control.focus();
            baseControl.hasMod('focused').should.be.true;

            control.blur();
            baseControl.hasMod('focused').should.be.false;
        });

        it('should synchronize DOM-focus with focus state', function() {
            baseControl.hasMod('focused').should.be.false;

            baseControl.setMod('focused');
            dom.getFocused()[0].should.be.equal(control[0]);

            baseControl.delMod('focused');
            dom.getFocused()[0].should.not.be.equal(control[0]);
        });

        it('should set focus state if DOM-focus has been set before init', function() {
            var domElem = $(BEMHTML.apply(bemjson)).appendTo('body');
            domElem.find('.' + BaseControl.buildClass('control')).focus();

            var baseControl = BEMDOM.init(domElem).bem('base-control');
            baseControl.hasMod('focused').should.be.true;

            BEMDOM.destruct(baseControl.domElem);
        });

        it('should have DOM-focus if initialized with focus state', function() {
            var bemJson = objects.extend({}, bemjson);
            bemJson.mods = { focused : true };

            var baseControl = buildControl(bemJson).bem('base-control');
            dom.containsFocus(baseControl.elem('control')).should.be.true;
            BEMDOM.destruct(baseControl.domElem);
        });
    });

    describe('disable', function() {
        it('should drop focus state on disabling', function() {
            baseControl
                .setMod('focused')
                .setMod('disabled')
                .hasMod('focused').should.be.false;
        });

        it('should not set focus state if disabled', function() {
            baseControl
                .setMod('disabled')
                .setMod('focused')
                .hasMod('focused').should.be.false;
        });

        it('should react on disabling', function() {
            control.prop('disabled').should.be.false;

            baseControl.setMod('disabled');
            control.prop('disabled').should.be.true;

            baseControl.delMod('disabled');
            control.prop('disabled').should.be.false;
        });
    });
});

provide();

function buildControl(bemjson) {
    return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'));
}

});
