modules.define('i-bem__dom', ['jquery', 'BEMHTML'], function(provide, $, BEMHTML, BEMDOM) {

BEMDOM.decl('attach', {
    onSetMod : {
        'js' : {
            'inited' : function() {
            }
        }
    },

    /**
     * Returns control value
     * @returns {String}
     */
    getVal : function() {
        return this.elem('control').val();
    },

    /**
     * Clear control value
     * @param {Object} [data] additional data
     * @returns {this}
     */
    clear : function(data) {
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

        return this
            .delMod(this.elem('no-file'), 'hidden')
            .dropElemCache('control file')
            ._update(data);
    },

    _onClearClick : function() {
        this.clear({ source : 'clear' });
    },

    _onChange : function() {
        this
            .setMod(this.elem('no-file'), 'hidden', true) // TODO: https://github.com/bem/bem-core/issues/214
            ._buildFileElem()
            ._update();
    },

    _update : function(data) {
        return this.trigger('change', data);
    },

    _buildFileElem : function() {
        var fileName = this._getFileName(this.getVal());

        this.elem('file').length && BEMDOM.destruct(this.elem('file'));

        BEMDOM.append(
            this.domElem,
            BEMHTML.apply({
                block : 'attach',
                elem : 'file',
                content : [
                    { elem : 'icon', mods : { file : this._getExtension(fileName) } },
                    { elem : 'text', content : fileName },
                    { elem : 'clear' }
                ]
            }));

        return this.dropElemCache('file');
    },

    _getFileName : function(path) {
        return path.split('\\').pop(); // TODO: учесть разделитель путей в windows
    },

    _extensionsToMods : {
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
    },

    _getExtension : function(fileName) {
        var ext = fileName.split('.').pop().toLowerCase();
        return this._extensionsToMods.hasOwnProperty(ext)? this._extensionsToMods[ext] || ext : '';
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

        return false;
    }
});

provide(BEMDOM);

});
