modules.define('i-bem__dom', ['jquery', 'BEMHTML'], function(provide, $, BEMHTML, DOM) {

/**
 * @namespace
 * @name Attach
 */
DOM.decl('attach', /** @lends Attach.prototype */ {
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._noFileText = this.elem('text').text();

                this
                    .bindTo('reset', 'click', this.resetFile) // TODO: сделать live-событием
                    ._update()
                    ._getButton()
                        .on('focus', this._onButtonFocus, this)
                        .on('blur', this._onButtonBlur, this);
            }
        }
    },

    _onButtonFocus : function() {
        this._isControlFocused() || this.elem('control').focus();
    },

    _onButtonBlur : function() {
        this._isControlFocused() && this.elem('control').blur();
    },

    /**
     * Возвращает значение контрола, путь к выбранному файлу
     * @returns {String}
     */
    val : function() {
        return this.elem('control').val();
    },

    /**
     * Сбросить выбранное значение контрола
     * @returns {this}
     */
    resetFile : function() {
        var control = this.elem('control');

        control.replaceWith(BEMHTML.apply({
            block : 'attach',
            elem  : 'control',
            attrs : {
                name     : control.attr('name'),
                tabindex : control.attr('tabindex')
            }
        }));

        return this
            .dropElemCache('control')
            ._update()
            .delMod(this.elem('reset'), 'visibility')
            .trigger('reset');
    },

    /**
     * @returns {this}
     */
    _update : function() {
        var fileName = this._getFileByPath(this.val());

        this
            ._setFile(fileName)
            ._setExtension(this._getExtension(fileName));

        fileName && this
            .setMod(this.elem('reset'), 'visibility', 'visible')
            .trigger('change'); // NOTE: при init-e fileName точно пустой, поэтому не будет события

        return this;
    },

    /**
     * @param {String} path
     * @returns {String}
     */
    _getFileByPath : function(path) {
        return path.split('\\').pop();
    },

    /**
     * @param {String} fileName
     * @returns {this}
     */
    _setFile : function(fileName) {
        this
            .toggleMod(this.elem('holder'), 'state', 'hidden', fileName)
            .elem('text').html(fileName || this._noFileText);
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

    /**
     * @param {String} fileName
     * @returns {String}
     */
    _getExtension : function(fileName) {
        var ext = fileName.split('.').pop().toLowerCase();
        return this._extensionsToMods.hasOwnProperty(ext)? this._extensionsToMods[ext] || ext : '';
    },

    /**
     * @param {String} extension
     * @returns {this}
     */
    _setExtension : function(extension) {
        return this.setMod(this.elem('holder'), 'file', extension || this.params.unknownType);
    },

    getDefaultParams : function() {
        return { unknownType : 'unknown' }; // TODO: используетс ли этот параметр?
    },

    _getButton : function() {
        return this._button || (this._button = this.findBlockOn('button', 'button'));
    },

    /**
     * Проверяет в фокусе ли контрол
     * @returns {Boolean}
     */
    _isControlFocused : function() {
        try {
            return this.containsDomElem($(DOM.doc[0].activeElement));
        } catch(e) {
            return false;
        }
    }
}, /** @lends Attach */{
    live : function() {
        this
            .liveBindTo('change', function() { this._update() })
            .liveBindTo('control', 'focusin focusout',  function(e) {
                this._getButton().toggleMod('focused', 'yes', e.type === 'focusin');
            });

        return false;
    }
});

provide(DOM);

});
