/**
 * @module control
 */

modules.define(
    'control',
    ['i-bem__dom', 'dom', 'next-tick'],
    function(provide, BEMDOM, dom, nextTick) {

/**
 * @exports
 * @class control
 * @abstract
 * @bem
 */
provide(BEMDOM.decl(this.name, /** @lends control.prototype */{
    beforeSetMod : {
        'focused' : {
            'true' : function() {
                return !this.hasMod('disabled');
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._focused = dom.containsFocus(this.elem('control'));
                this._focused?
                    // if control is already in focus, we need to force _onFocus
                    this._onFocus() :
                    // if block already has focused mod, we need to focus control
                    this.hasMod('focused') && this._focus();

                this._tabIndex = typeof this.params.tabIndex !== 'undefined'?
                    this.params.tabIndex :
                    this.elem('control').attr('tabindex');

                if(this.hasMod('disabled') && this._tabIndex !== 'undefined')
                    this.elem('control').removeAttr('tabindex');
            }
        },

        'focused' : {
            'true' : function() {
                this._focused || this._focus();
            },

            '' : function() {
                this._focused && this._blur();
            }
        },

        'disabled' : {
            'true' : function() {
                this.elem('control').attr('disabled', true);
                this.delMod('focused');
                typeof this._tabIndex !== 'undefined' &&
                    this.elem('control').removeAttr('tabindex');
            },

            '' : function() {
                this.elem('control').removeAttr('disabled');
                typeof this._tabIndex !== 'undefined' &&
                    this.elem('control').attr('tabindex', this._tabIndex);
            }
        }
    },

    /**
     * Returns name of control
     * @returns {String}
     */
    getName : function() {
        return this.elem('control').attr('name') || '';
    },

    /**
     * Returns control value
     * @returns {String}
     */
    getVal : function() {
        return this.elem('control').val();
    },

    _onFocus : function() {
        this._focused = true;
        this.setMod('focused');
    },

    _onBlur : function() {
        this._focused = false;
        this.delMod('focused');
    },

    _focus : function() {
        dom.isFocusable(this.elem('control'))?
            this.elem('control').focus() :
            this._onFocus(); // issues/1456
    },

    _blur : function() {
        dom.isFocusable(this.elem('control'))?
            this.elem('control').blur() :
            this._onBlur();
    }
}, /** @lends control */{
    live : function() {
        this
            .liveBindTo('control', 'focusin', function() {
                this._focused || this._onFocus(); // to prevent double call of _onFocus in case of init by focus
            })
            .liveBindTo('control', 'focusout', this.prototype._onBlur);

        var focused = dom.getFocused();
        if(focused.hasClass(this.buildClass('control'))) {
            var _this = this; // TODO: https://github.com/bem/bem-core/issues/425
            nextTick(function() {
                if(focused[0] === dom.getFocused()[0]) {
                    var block = focused.closest(_this.buildSelector());
                    block && block.bem(_this.getName());
                }
            });
        }
    }
}));

});
