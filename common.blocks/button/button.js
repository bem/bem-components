modules.define('i-bem__dom', ['jquery', 'dom'], function(provide, $, dom, BEMDOM) {

BEMDOM.decl('button', {
    beforeSetMod : function(modName, modVal) {
        if(this.hasMod('disabled') && modVal && (modName === 'focused' || modName === 'pressed'))
            return false;
    },

    onSetMod : {
        'focused' : {
            true : function() {
                this.bindToWin('unload', this._onUnload); // TODO: выяснить и написать зачем это

                dom.isFocusable(this.domElem) && (dom.containsFocus(this.domElem) || this.domElem.focus());

                this.trigger('focus');
            },

            '' : function() {
                this.unbindFromWin('unload', this._onUnload);

                dom.containsFocus(this.domElem) && this.domElem.blur();

                this.trigger('blur');
            }
        },

        'disabled' : {
            '*' : function(_, modVal) {
                this.domElem.attr('disabled', modVal);
            },

            true : function() {
                this.delMod('pressed');
            }
        },

        'pressed' : function(_, modVal) {
            this.trigger(modVal? 'press' : 'release');
        }
    },

    _onUnload : function() {
        this.delMod('focused');
    },

    _onClick : function(e) {
        this.hasMod('disabled')?
            e.preventDefault() :
            this.trigger('click');
    }
}, {
    live : function() {
        this
            .liveBindTo('pointerclick', function(e) {
                this._onClick(e);
            })
            .liveBindTo('pointerup', function() {
                this.delMod('pressed');
            })
            .liveBindTo('pointerdown', function() {
                this.setMod('pressed', true);
            })
            .liveBindTo('focusin focusout', function(e) {
                this.setMod('focused', e.type === 'focusin');
            })
    }
});

provide(BEMDOM);

});
