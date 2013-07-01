/**
 * @namespace
 * @name Button
 */
BEM.DOM.decl('button', /** @lends Button.prototype */ {

    onSetMod : {

        'js' : function() {

            this.__base.apply(this, arguments);

            this._control = this.elem('control').length && this.elem('control') || this.domElem;
        },

        'focused' : {

            'yes' : function() {

                if(this.isDisabled())
                    return false;

                this
                    .bindToWin('unload', function() {
                        this.delMod('focused');
                    })
                    .bindTo('keydown', this._onKeyDown);

                this._isControlFocused() || this._control.focus();

                this.afterCurrentEvent(function() {
                    this.trigger('focus');
                });

            },

            '' : function() {

                this
                    .unbindFromWin('unload')
                    .unbindFrom('keydown');

                this._isControlFocused() && this._control.blur();

                this.afterCurrentEvent(function() {
                    this.trigger('blur');
                });

            }

        },

        'disabled' : function(modName, modVal) {

            this.__base.apply(this, arguments);

            disable && domElem.keyup();

        },

        'hovered' : function(modName, modVal) {

            if (this.isDisabled()) return false;

            modVal === '' && this.delMod('pressed');

        },

        'pressed' : function(modName, modVal) {

            this.isDisabled() || this.hasMod('focused', 'no') || this.setMod('focused', 'yes');

            return this.__base.apply(this, arguments);

        }

    },

    /**
     * Проверяет в фокусе ли контрол
     * @private
     * @returns {Boolean}
     */
    _isControlFocused : function() {

        try {
            return this.containsDomElem($(this.__self.doc[0].activeElement));
        } catch(e) {
            return false;
        }

    },

    _onKeyDown : function(e) {

        var keyCode = e.keyCode;
        // имитируем state_pressed по нажатию на enter и space
        if((keyCode == 13 || keyCode == 32) && !this._keyDowned) {
            this._keyDowned = true;
            this
                .setMod('pressed', 'yes')
                .bindTo('keyup', function() {
                    this
                        .delMod('pressed')
                        .unbindFrom('keyup');

                    delete this._keyDowned;

                    // делаем переход по ссылке по space
                    if(keyCode == 32 && this.domElem.attr('href')) {
                        document.location = this.domElem.attr('href');
                    }
                });
        }

    },

    _onClick : function(e) {
        this.isDisabled()?
            e.preventDefault() :
            this.afterCurrentEvent(function() {
                this.trigger('click');
            });
    },

    destruct : function () {

        this.delMod('focused', 'yes');
        this.__base.apply(this, arguments);

    }

}, /** @lends Button */ {

    live : function() {

        var eventsToMods = {
            'mouseover' : { name : 'hovered', val : 'yes' },
            'mouseout' : { name : 'hovered' },
            'mousedown' : { name : 'pressed', val : 'yes' },
            'mouseup' : { name : 'pressed' },
            'focusin' : { name : 'focused', val : 'yes' },
            'focusout' : { name : 'focused', val : 'yes' }
        };

        this
            .liveBindTo('leftclick', function(e) {
                this._onClick(e);
            })
            .liveBindTo('mouseover mouseout mouseup focusin focusout', function(e) {
                var mod = eventsToMods[e.type];
                this.setMod(mod.name, mod.val || '');
            })
            .liveBindTo('mousedown', function(e) {
                var mod = eventsToMods[e.type];
                e.which == 1 && this.setMod(mod.name, mod.val || '');
            });
    }

});
