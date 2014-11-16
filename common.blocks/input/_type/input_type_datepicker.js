modules.define('input', function(provide, Input) {

provide(Input.decl({ modName : 'type', modVal : 'datepicker' }, {

    onSetMod : {
        js : {
            inited : function() {
                this._calendar || (this._calendar = this.findBlockInside('calendar').on('change', function(e, data) {
                    var date = data.date,
                        day = date.getDate(),
                        month = date.getMonth();
                    this.setVal([
                        day < 10? '0' + day : day,
                        month < 10? '0' + month : month,
                        date.getFullYear()
                    ].join('.'));
                    this._popup.delMod('visible');
                }, this));
            }
        },
        focused : {
            'true' : function() {
                this._popup || (this._popup = this.findBlockInside('popup'));
                this._popup.setAnchor(this).setMod('visible');
            }
        }
    }

}));

});
