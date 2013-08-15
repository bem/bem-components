modules.define('i-bem__dom', ['jquery', 'BEMHTML'], function(provide, $, BEMHTML, BEMDOM) {

BEMDOM.decl('attach', {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._noFileText = this.elem('text').text();
                this._update();
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
     * Сбросить выбранное значение контрола
     * @param {Object} [data] additional data
     * @returns {this}
     */
    clear : function(data) {
        var control = this.elem('control');

        control.replaceWith(BEMHTML.apply({
            block : 'attach',
            elem : 'control',
            attrs : {
                name : control.attr('name'),
                tabindex : control.attr('tabindex')
            }
        }));

        return this
            .dropElemCache('control')
            ._update()
            .delMod(this.elem('clear'), 'visible')
            .trigger('change', data);
    },

    _onClearClick : function() {
        this.clear({ source : 'clear' });
    },

    _update : function() {
        var fileName = this._getFileByPath(this.getVal());

        this
            ._setFile(fileName)
            ._setExtension(this._getExtension(fileName));

        fileName && this
            .setMod(this.elem('reset'), 'visible')
            .trigger('change'); // NOTE: при init-e fileName точно пустой, поэтому не будет события

        return this;
    },

    _getFileByPath : function(path) {
        return path.split('\\').pop(); // TODO: учесть разделитель путей в windows
    },

    _setFile : function(fileName) {
        this
            .toggleMod(this.elem('holder'), 'hidden', true, !!fileName)
            .elem('text').text(fileName || this._noFileText);
        return this;
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
    },

    _setExtension : function(extension) {
        return this.setMod(this.elem('holder'), 'file', extension || 'unknown');
    }
}, {
    live : function() {
        this
            .liveBindTo('clear', 'pointerclick', function() {
                this._onClearClick();
            })
            .liveBindTo('control', 'change', function() {
                this._update();
            });

        return false;
    }
});

provide(BEMDOM);

});
