modules.define(
    'i-bem__dom',
    ['jquery', 'BEMHTML', 'strings__escape'],
    function(provide, $, BEMHTML, escape, BEMDOM) {

BEMDOM.decl('attach', {
    /**
     * Returns control value
     * @returns {String}
     */
    getVal : function() {
        return this.elem('control').val();
    },

    /**
     * Returns control name
     * @returns {String}
     */
    getName : function() {
        return this.elem('control').attr('name');
    },

    /**
     * Clear control value
     * @param {Object} [data] additional data
     * @returns {this}
     */
    clear : function(data) {
        if(!this.getVal()) return;

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
            ._triggerChange(data);
    },

    _onClearClick : function() {
        this.clear({ source : 'clear' });
    },

    _onChange : function() {
        this.elem('no-file').detach();
        this
            ._updateFileElem()
            ._triggerChange();
    },

    _triggerChange : function(data) {
        return this.trigger('change', data);
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
                        elem : 'icon',
                        mods : { file : extractExtensionFromFileName(fileName) }
                    },
                    { elem : 'text', content : escape.html(fileName) },
                    { elem : 'clear' }
                ]
            }));

        return this.dropElemCache('file');
    }
}, {
    live : function() {
        this
            .liveBindTo('clear', 'pointerclick', function() {
                this._onClearClick();
            })
            .liveBindTo('control', 'change', function() {
                this._onChange();
            });
    }
});

provide(BEMDOM);

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
