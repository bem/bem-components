/**
 * @namespace
 * @name Block
 */
BEM.DOM.decl('input', /** @lends Block.prototype */ {

    onSetMod : {

        'js' : function() {

            this.__base.apply(this, arguments);

            var _this = this;

            if(_this.elem('clear') && !_this.hasMod('clear', 'visibility', 'visible')) {
                _this.bindTo('box', 'click', function(e) {
                    _this.setMod('focused', 'yes');
                });
            }

        }
    },

    onElemSetMod : {

        'clear' : {

            'visibility' : {

                'visible' : function() {
                    this.unbindFrom('box', 'click');
                },

                '' : function() {
                    var _this = this;
                    this.bindTo('box', 'click', function(e) {
                        _this.setMod('focused', 'yes');
                    });
                }
            }

        }
    }

});