/**
 * @module attach
 */

modules.define(
    'attach',
    ['i-bem-dom', 'i-bem__internal', 'control', 'button', 'jquery', 'strings__escape'],
    function(provide, bemDom, INTERNAL, Control, Button, $, escape) {

/**
 * @exports
 * @class attach
 * @augments control
 * @bem
 */
provide(bemDom.declBlock(this.name, Control, /** @lends attach.prototype */{
    onSetMod : {
        'disabled' : function(modName, modVal) {
            this.__base.apply(this, arguments);
            this._getButton().setMod(modName, modVal);
        }
    },

    /**
     * Clear control value
     * @param {Object} [data] additional data
     * @returns {attach} this
     */
    clear : function(data) {
        if(!this.getVal()) return this;
        return this._clear(data);
    },

    _clear : function(data) {
        var control = this._elem('control').domElem,
            name = control.attr('name'),
            tabIndex = control.attr('tabindex');

        bemDom.replace(
            control,
            '<input' +
                ' class="' + control.attr('class') + '"' +
                ' type="file"' +
                (name? ' name="' + name + '"' : '') +
                (tabIndex? ' tabindex="' + tabIndex + '"' : '') +
            '/>');

        bemDom.destruct(this.findChildElem('file').domElem);

        this.domElem.append(this._elem('no-file').domElem); // use append because only detached before

        return this
            ._emitChange(data);
    },

    _onClearClick : function() {
        this.clear({ source : 'clear' });
    },

    _onChange : function() {
        this._elem('no-file').domElem.detach();
        this.getVal()?
            this
                ._updateFileElem()
                ._emitChange() :
            this._clear();
    },

    _emitChange : function(data) {
        return this._emit('change', data);
    },

    _updateFileElem : function() {
        var fileName = extractFileNameFromPath(this.getVal());

        this.findChildElem('file') && bemDom.destruct(this._elem('file').domElem);

        bemDom.append(
            this.domElem,
            '<span class="' +
                this.__self._buildClassName('file') + '">' +
                '<span class="' +
                    this.__self._buildClassName('text') + '">' +
                    escape.html(fileName) +
                '</span>' +
                '<span class="' + this.__self._buildClassName('clear') + '"/>' +
            '</span>');

        return this;
    },

    _getButton : function() {
        return this.findChildBlock(Button);
    }
}, /** @lends attach */{
    lazyInit : true,
    onInit : function() {
        this._domEvents('clear').on('pointerclick', this.prototype._onClearClick);
        this._domEvents('control').on('change', this.prototype._onChange);

        return this.__base.apply(this, arguments);
    }
}));

function extractFileNameFromPath(path) {
    return path.split('\\').pop(); // we need this only in windows
}

});
