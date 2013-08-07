modules.define('i-bem__dom', function(provide, BEMDOM) {

var KEY_CODE_SPACE = 32,
    KEY_CODE_ENTER = 13;

BEMDOM.decl('button', {
    beforeSetMod : {
        'hovered' : {
            true : function() {
                if(this.isDisabled())
                    return false;
            }
        }
    },

    onSetMod : {
        'hovered' : {
            '' : function() {
                this.delMod('pressed');
            }
        },

        'focused' : {
            true : function() {
                this.__base.apply(this, arguments);
                this.bindTo('keydown', this._onKeyDown);
            },

            '' : function() {
                this.__base.apply(this, arguments);
                this.unbindFrom('keydown', this._onKeyDown);
            }
        }
    },

    _onKeyDown : function(e) {
        var keyCode = e.keyCode;
        if((keyCode === KEY_CODE_SPACE || keyCode === KEY_CODE_ENTER) && !this._keyDowned) {
            this._keyDowned = true;
            var onKeyUp = function() {
                this
                    .delMod('pressed')
                    .unbindFrom('keyup', onKeyUp);

                this._keyDowned = false;

                keyCode === KEY_CODE_SPACE && this._href &&
                    (document.location = this._href);
            };

            this
                .setMod('pressed')
                .bindTo('keyup', onKeyUp);
        }
    }
}, {
    live : function() {
        this.liveBindTo('mouseover mouseout', function(e) {
            this.setMod('hovered', e.type === 'mouseover');
        });

        return this.__base.apply(this, arguments);
    }
});

provide(BEMDOM);

});