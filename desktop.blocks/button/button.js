modules.define('i-bem__dom', ['functions'], function(provide, functions, BEMDOM) {

var KEY_CODE_SPACE = 32,
    KEY_CODE_ENTER = 13;

BEMDOM.decl('button', {
    beforeSetMod : {
        'hovered' : {
            'true' : function() {
                return !this.hasMod('disabled');
            }
        }
    },

    onSetMod : {
        'hovered' : {
            '' : function() {
                this.__base.apply(this, arguments);
                this.hasMod('toggle') || this.delMod('pressed');
            }
        },

        'focused' : {
            'true' : function() {
                this.__base.apply(this, arguments);
                this.bindTo('keydown', this._onKeyDown);
            },

            '' : function() {
                this.__base.apply(this, arguments);
                this.unbindFrom('keydown', this._onKeyDown);
            }
        },

        'disabled' : {
            'true' : function() {
                this.__base.apply(this, arguments);
                this.delMod('hovered');
            }
        }
    },

    _onKeyDown : function(e) {
        if(this.hasMod('disabled')) return;

        var keyCode = e.keyCode;
        if((keyCode === KEY_CODE_SPACE || keyCode === KEY_CODE_ENTER) && !this._keyDowned) {
            this._keyDowned = true;
            var onKeyUp = function() {
                this._keyDowned = false;

                this.unbindFrom('keyup', onKeyUp);

                if(!this.hasMod('toggle')) {
                    this.delMod('pressed');
                    keyCode === KEY_CODE_SPACE && this._doAction();
                }
            };

            this.bindTo('keyup', onKeyUp);

            this.hasMod('toggle')?
                this.getMod('toggle') === 'check'?
                    this.toggleMod('checked') :
                    this.setMod('checked') :
                this.setMod('pressed');
        }
    },

    _doAction : functions.noop
}, {
    live : function() {
        this
            .liveBindTo('mouseover', function() {
                this.setMod('hovered');
            })
            .liveBindTo('mouseout', function() {
                this.delMod('hovered');
            });

        return this.__base.apply(this, arguments);
    }
});

provide(BEMDOM);

});