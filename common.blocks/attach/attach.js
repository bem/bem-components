/**
 * @module attach
 */

modules.define(
    'attach',
    ['i-bem__dom', 'i-bem__internal', 'control', 'jquery', 'strings__escape'],
    function(provide, BEMDOM, INTERNAL, Control, $, escape) {

/**
 * @exports
 * @class attach
 * @augments control
 * @bem
 */
provide(BEMDOM.decl({ block : this.name, baseBlock : Control }, /** @lends attach.prototype */{
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
        var control = this.elem('control'),
            name = control.attr('name'),
            tabIndex = control.attr('tabindex');

        BEMDOM.replace(
            control,
            '<input' +
                ' class="' + control.attr('class') + '"' +
                ' type="file"' +
                (name? ' name="' + name + '"' : '') +
                (tabIndex? ' tabindex="' + tabIndex + '"' : '') +
            '/>');

        BEMDOM.destruct(this.elem('file'));

        this.domElem.append(this.elem('no-file')); // use append because only detached before

        return this
            .dropElemCache('control file')
            ._emitChange(data);
    },

    _onClearClick : function() {
        this.clear({ source : 'clear' });
    },

    _onChange : function() {
        this.elem('no-file').detach();
        this.getVal()?
            this
                ._updateFileElem()
                ._emitChange() :
            this._clear();
    },

    _emitChange : function(data) {
        return this.emit('change', data);
    },

    _updateFileElem : function() {
        var fileName = extractFileNameFromPath(this.getVal());

        this.elem('file').length && BEMDOM.destruct(this.elem('file'));

        BEMDOM.append(
            this.domElem,
            '<span class="' +
                this.__self.buildClass('file') + '">' +
                '<span class="' +
                    this.__self.buildClass('text') + '">' +
                    escape.html(fileName) +
                '</span>' +
                '<span class="' + this.__self.buildClass('clear') + '"/>' +
            '</span>');

        return this.dropElemCache('file');
    },

    _getButton : function() {
        return this.findBlockInside('button');
    }
}, /** @lends attach */{
    live : function() {
        this
            .liveBindTo('clear', 'pointerclick', this.prototype._onClearClick)
            .liveBindTo('control', 'change', this.prototype._onChange);

        return this.__base.apply(this, arguments);
    }
}));

function extractFileNameFromPath(path) {
    return path.split('\\').pop(); // we need this only in windows
}

});
