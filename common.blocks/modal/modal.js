/**
 * @module modal
 */

modules.define(
    'modal',
    ['i-bem__dom', 'events'],
    function(provide, BEMDOM, events) {

/**
 * @exports
 * @class modal
 * @bem
 *
 * @bemmod visible Represents visible state
 */
provide(BEMDOM.decl(this.name, /** @lends modal.prototype */{
    beforeSetMod : {
        'visible' : {
            '' : function() {
                var e = new events.Event('beforeClose');

                this.emit(e);

                return !e.isDefaultPrevented();
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._popup = this.findBlockOn('popup');
            }
        },

        'visible' : {
            'true' : function() {
                // Apply the animation only at first opening, otherwise the animation will be played when page loaded.
                this.setMod('animation');

                this._popup.setMod('visible');
            },

            '' : function() {
                this._popup.delMod('visible');
            }
        }
    },

    _onPopupHide : function() {
        this.delMod('visible');
    }
}, /** @lends modal */{
    live : function() {
        this.liveInitOnBlockEvent({ modName : 'visible', modVal : '' }, 'popup', function() {
            this._onPopupHide();
        });
    }
}));
});
