import bemDom from 'bem:i-bem-dom';

export default bemDom.declElem('dropdown', 'switcher', {
    _onSwitcherClick : function() {
        this._emit('click');
    }
}, {
    lazyInit : true
});
