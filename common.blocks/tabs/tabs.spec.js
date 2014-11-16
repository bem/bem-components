modules.define(
    'spec',
    ['tabs', 'i-bem__dom', 'jquery', 'BEMHTML', 'radio-group'],
    function(provide, Tabs, BEMDOM, $, BEMHTML) {

        describe('tabs', function() {
            var tabs;

            function buildTabs(bemjson) {
                return BEMDOM.init($(BEMHTML.apply(bemjson)).appendTo('body'))
                    .bem('tabs');
            }

            beforeEach(function() {
                tabs = buildTabs({
                    block : 'tabs',
                    tabs : [
                        {
                            title : 'First',
                            content : 'First tab content'
                        },
                        {
                            title : 'Second',
                            content : 'Second tab content'
                        }
                    ]
                });
            });

            afterEach(function() {
                BEMDOM.destruct(tabs.domElem);
            });

            describe('changeTab', function() {
                it('should show the right tab on changeTab call', function() {
                    var currentVal = +tabs.findBlockInside('radio-group').getVal(),
                        id = tabs.elemParams(tabs.elem('box', 'selected', true)).id;

                    id.should.be.equal(currentVal);

                    tabs.changeTab(1);
                    id = tabs.elemParams(tabs.elem('box', 'selected', true)).id;

                    id.should.be.equal(1);

                });
            });
        });

        provide();

    });
