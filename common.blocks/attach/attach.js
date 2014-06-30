/**
 * @module attach
 */

modules.define(
    'attach',
    ['i-bem__dom', 'control', 'jquery', 'BEMHTML', 'strings__escape'],
    function(provide, BEMDOM, Control, $, BEMHTML, escape) {

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

        var control = this.elem('control');
        BEMDOM.replace(
            control,
            BEMHTML.apply({
                block : 'attach',
                elem : 'control',
                attrs : {
                    name : control.attr('name'),
                    tabindex : control.attr('tabindex')
                }
            }));

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
        this
            ._updateFileElem()
            ._emitChange();
    },

    _emitChange : function(data) {
        return this.emit('change', data);
    },

    _updateFileElem : function() {
        var fileName = extractFileNameFromPath(this.getVal());

        this.elem('file').length && BEMDOM.destruct(this.elem('file'));

        BEMDOM.append(
            this.domElem,
            BEMHTML.apply({
                block : 'attach',
                elem : 'file',
                content : [
                    {
                        block : 'icon',
                        mods : { file : extractExtensionFromFileName(fileName) }
                    },
                    { elem : 'text', content : escape.html(fileName) },
                    { elem : 'clear' }
                ]
            }));

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

var EXTENSIONS_TO_MODS = {
    'zip'  : 'archive',
    'rar'  : 'archive',
    'tar'  : 'archive',
    'gz'   : 'archive',
    '7z'   : 'archive',
    'gif'  : '',
    'jpg'  : '',
    'jpeg' : 'jpg',
    'png'  : '',
    'svg'  : '',
    'eml'  : '',
    'exe'  : '',
    'm4a'  : 'audio',
    'ogg'  : 'audio',
    'mp3'  : '',
    'wav'  : '',
    'wma'  : '',
    'flv'  : 'video',
    'mov'  : '',
    'wmv'  : '',
    'mp4'  : '',
    'avi'  : '',
    'xls'  : '',
    'doc'  : '',
    'docx' : 'doc',
    'txt'  : '',
    'pdf'  : '',
    'ppt'  : ''
};

function extractFileNameFromPath(path) {
    return path.split('\\').pop(); // we need this only in windows
}

function extractExtensionFromFileName(fileName) {
    var ext = fileName.split('.').pop().toLowerCase();
    return EXTENSIONS_TO_MODS.hasOwnProperty(ext)? EXTENSIONS_TO_MODS[ext] || ext : '';
}

});
