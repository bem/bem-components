modules.define('a11y-test', [
    'i-bem__dom',
    'jquery',
    'keyboard__codes'
], function(provide, BEMDOM, $, keyCodes) {

provide(BEMDOM.decl(this.name, {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this.bindToDoc('keydown', this._onKeyDown);
            }
        }
    },
    onElemSetMod : {
        'row' : {
            'current' : {
                'true' : function() {
                    this.delMod(this.elem('row', 'current', true), 'current');
                }
            }
        }
    },
    _onKeyDown : function(e) {
        var rows = this.elem('row'),
            current = this.elem('row', 'current', true);

        switch(e.keyCode) {
            case keyCodes.DOWN:
                this.setMod(current[0]?
                    rows.eq(rows.index(current) + 1) :
                    rows.eq(0), 'current', true);
                break;
            case keyCodes.UP:
                var index = rows.index(current);

                index > 0?
                    this.setMod(rows.eq(index - 1), 'current', true):
                    this.delMod(current, 'current');
                break;
            case keyCodes.TAB:
                this.nextTick(function() {
                    var row = this.closestElem($(document.activeElement), 'row');

                    row[0]?
                        this.setMod(row, 'current', true) :
                        this.delMod(current, 'current');
                });
                break;
        }
    }
}));

});
