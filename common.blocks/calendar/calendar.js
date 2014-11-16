modules.define(
    'calendar',
    ['i-bem__dom', 'BEMHTML'],
    function(provide, BEMDOM, BEMHTML) {
        provide(BEMDOM.decl(this.name, {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this._collectData();
                    }
                }
            },

            _collectData : function(){
                this._date = new Date(this.params.date);
                this._switchersContent = this.params.switchers;
            },

            _changeDate : function(){
                var html = BEMHTML.apply({
                    block : 'calendar',
                    elem : 'content',
                    date : this._date,
                    selected : 'no',
                    switchers : this._switchersContent
                });

                BEMDOM.update(this.domElem, html);
            },

            getDate : function(){
                return this._date;
            }

        }, {

            live : function() {
                this.liveBindTo('switcher', 'click', function(e) {
                    var year = this._date.getFullYear();
                    var month = this._date.getMonth() + (this.getMod(e.currentTarget, 'dest') === 'prev'? (-1) : 1);

                    this._date = new Date(year, month);
                    this._changeDate();
                });

                this.liveBindTo('cell', 'click', function(e){
                    if(!this.hasMod(e.currentTarget, 'state', 'disable')){
                        var target = e.currentTarget,
                            date = new Date(this.elemParams(target).date),
                            activeCell = this.findElem('cell', 'state', 'active');

                        this._date = date;
                        this.delMod(activeCell, 'state');
                        this.setMod(target, 'state', 'active');
                        this.emit('change', { date : date });
                    }
                });
            }

        }));
    });
