/**
 * @module control
 */

modules.define(
    'control',
    ['i-bem-dom', 'dom', 'next-tick'],
    function(provide, bemDom, dom, nextTick) {

/**
 * @exports
 * @class control
 * @abstract
 * @bem
 */
provide(bemDom.declBlock(this.name, /** @lends control.prototype */{
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
                var controlDomElem = this._elem('control').domElem;

                this._focused = dom.containsFocus(controlDomElem);
                this._focused?
                    // if control is already in focus, we need to force _onFocus
                    this._onFocus() :
                    // if block already has focused mod, we need to focus control
                    this.hasMod('focused') && this._focus();

                this._tabIndex = typeof this.params.tabIndex !== 'undefined'?
                    this.params.tabIndex :
                    controlDomElem.attr('tabindex');

                if(this.hasMod('disabled') && this._tabIndex !== 'undefined')
                    controlDomElem.removeAttr('tabindex');
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
                this._elem('control').domElem.attr('disabled', true);
                this.delMod('focused');
                typeof this._tabIndex !== 'undefined' &&
                    this._elem('control').domElem.removeAttr('tabindex');
            },

            '' : function() {
                this._elem('control').domElem.removeAttr('disabled');
                typeof this._tabIndex !== 'undefined' &&
                    this._elem('control').domElem.attr('tabindex', this._tabIndex);
            }
        }
    },

    /**
     * Returns name of control
     * @returns {String}
     */
    getName : function() {
        return this._elem('control').domElem.attr('name') || '';
    },

    /**
     * Returns control value
     * @returns {String}
     */
    getVal : function() {
        return this._elem('control').domElem.val();
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
        dom.isFocusable(this._elem('control').domElem)?
            this._elem('control').domElem.focus() :
            this._onFocus(); // issues/1456
    },

    _blur : function() {
        // force both `blur` and `_onBlur` for FF which can have disabled element as `document.activeElement`
        this._elem('control').domElem.blur();
        this._onBlur();
    }
}, /** @lends control */{
    lazyInit : true,
    onInit : function() {
        this._domEvents('control')
            .on('focusin', function() {
                this._focused || this._onFocus(); // to prevent double call of _onFocus in case of init by focus
            })
            .on('focusout', this.prototype._onBlur);

        var focused = dom.getFocused();
        if(focused.hasClass(this._buildClassName('control'))) {
            var _this = this;
            nextTick(function() {
                if(focused[0] === dom.getFocused()[0]) {
                    var block = focused.closest(_this._buildSelector());
                    block && block.bem(_this);
                }
            });
        }
    }
}));

});
