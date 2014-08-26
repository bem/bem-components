modules.define('rating', ['i-bem__dom', 'control', 'keyboard__codes'],

    function(provide, BEMDOM, Control) {

    provide(BEMDOM.decl({ block : this.name, modName : 'readonly', modVal : 'no', baseBlock : Control }, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this.__base.apply(this, arguments);

                    this._score = 0;
                    this._on = true;
                }
            },

            'focused' : {
                'true' : function() {
                    this.__base.apply(this, arguments);
                    this.bindToDoc('keydown', this._onKeyDown);
                },

                '' : function() {
                    this
                        .unbindFromDoc('keydown', this._onKeyDown)
                        .__base.apply(this, arguments);
                }
            }

        },

        _vote : function(point) {
            var params = this.params;

            this._score = ( ( (point + params.total) / (params.votes + 1) ) * params.size).toFixed(1);
            this.setVal(this._score);
        },

        setVal : function(score) {
            this.findElem('staticLayer').width(score);
        },

        getVal : function() {
            return this._score;
        }

    }, {
        live : function() {
            this.liveBindTo('input', 'click', function(e) {
               (this._on && this._vote(+e.currentTarget.context.value));
            });

            return this.__base.apply(this, arguments);
        }
    }));

});
