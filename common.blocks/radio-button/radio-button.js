(function(BEM, undefined) {

/**
 * @namespace JS-API блока radio-button
 * @name block
 */
BEM.DOM.decl({ block : 'radio-button', baseBlock : 'radiobox' }, /** @lends block.prototype */ {

    onElemSetMod : {

        'radio' : {

            'checked' : function(elem, modName, modVal) {
                this.__base.apply(this, arguments);

                this.setMod(elem, 'pressed', modVal);
            },

            'next-for-pressed' : {

                'yes' : function() {
                    this.delMod(this.elem('radio', 'next-for-pressed', 'yes'), 'next-for-pressed');
                }

            },

            'pressed' : {

                'yes' : function(elem) {
                    this
                        .delMod(this.elem('radio'), 'pressed')
                        .setMod(elem.next(), 'next-for-pressed', 'yes');
                },

                '' : function(elem) {
                    this.delMod(elem.next(), 'next-for-pressed');
                }

            }

        }

    },

    _onMouseDown : function(e) {

        var radio = e.data.domElem;

        if(this.isDisabled(radio) || this.hasMod(radio, 'checked', 'yes'))
            return;

        this.setMod(radio, 'pressed', 'yes');

        this.bindToDoc('mouseup', function(e) {
            this.afterCurrentEvent(function() {

                if(!this.findElem(radio, 'control').prop('checked')) {
                    this
                        .delMod(radio, 'pressed')
                        .setMod(this.elem('radio', 'checked', 'yes'), 'pressed', 'yes');
                }

            });

            this.unbindFromDoc('mouseup');
        });

    }

}, /** @lends block */ {

    live : function() {
        this.__base.apply(this, arguments);

        this.liveBindTo('radio', 'mousedown', function(e) {
            this._onMouseDown(e);
        });

        return false;
    }

});


})(BEM);