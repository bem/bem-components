/**
 * @module tabs
 */

modules.define('tabs', ['i-bem__dom', 'jquery'], function(provide, BEMDOM, $) {

    provide(BEMDOM.decl({ block : this.name }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    var theTabs = this;

                    this._boxsesList = {};

                    this.elem('box').each(function() {
                        var tabParams = theTabs.elemParams($(this));
                        theTabs._boxsesList[tabParams.id] = $(this);
                    });

                    this.findBlockInside('radio-group').on('change', function() {
                        theTabs.setMod(theTabs.elem('box'), 'selected', false);
                        theTabs.setMod(theTabs._boxsesList[this.getVal()], 'selected', true);
                    });
                }
            }
        }

    }));

});
