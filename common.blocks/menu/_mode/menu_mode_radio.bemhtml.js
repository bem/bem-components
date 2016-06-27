block('menu')
    .mod('mode', 'radio')
    .match(function() {
        return this._firstItem && this._checkedItems && !this._checkedItems.length;
    })
    .def()(function() {
        (this._firstItem.elemMods || (this._firstItem.elemMods = {})).checked = true;
        return applyNext();
    });
