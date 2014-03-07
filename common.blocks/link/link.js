modules.define('link', ['i-bem__dom'], function(provide, BEMDOM) {

provide(BEMDOM.decl(this.name, {
    beforeSetMod : {
        'focused' : {
            'true' : function() {
                return !this.hasMod('disabled');
            }
        }
    },

    onSetMod : {
        'focused' : {
            'true' : function() {
                this.domElem.focus();
            },

            '' : function() {
                this.domElem.blur();
            }
        },

        'disabled' : {
            'true' : function() {
                this.delMod('focused');
            }
        }
    },

    _onClick : function(e) {
        this.hasMod('disabled')?
            e.preventDefault() :
            this.emit('click');
    },

    _onFocus : function() {
        this.setMod('focused');
    },

    _onBlur : function() {
        this.delMod('focused');
    }
}, {
    live : function() {
        this
            .liveBindTo('pointerclick', function(e) {
                this._onClick(e);
            })
            .liveBindTo('focusin', function() {
                this._onFocus();
            })
            .liveBindTo('focusout', function() {
                this._onBlur();
            });
    }
}));

});
