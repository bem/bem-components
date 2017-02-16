modules.define('dropdown__switcher', ['i-bem-dom'], function(provide, bemDom) {

provide(bemDom.declElem('dropdown', 'switcher', {
    _onSwitcherClick : function() {
        this._emit('click');
    }
}, {
    lazyInit : true
}));

});
