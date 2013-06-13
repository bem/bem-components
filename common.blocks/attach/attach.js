modules.define('i-bem__dom', ['jquery', 'BEMHTML'], function(provide, $, BEMHTML, DOM) {

/**
 * @namespace
 * @name Attach
 */
DOM.decl('attach', /** @lends Attach.prototype */ {
    onSetMod : {
        'js' : {
            'inited' : function() {

                this
                    ._update() // TODO: проверить, что это нужно при ините, возможно нужно гарантировать нужное состояние из шаблонов
                    .bindTo('reset', 'click', this.resetFile); // TODO: сделать live-событием

                this._getButton()
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
     * @returns {BEM.DOM}
     */
    resetFile : function() {
        var buttonControl = this.elem('control');

        buttonControl.replaceWith(BEMHTML.apply({
            block: 'attach',
            elem: 'control',
            tag: 'input',
            attrs: {
                name: buttonControl.attr('name'),
                type: 'file',
                tabindex: buttonControl.attr('tabindex')
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

        if(fileName) {
            this
                .setMod(this.elem('reset'), 'visibility', 'visible')
                .trigger('change'); // NOTE: при init-e fileName точно пустой, поэтому не будет события
        }

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
            .setMod(this.elem('holder'), 'state', fileName ? '' : 'hidden')
            .elem('text').html(fileName || this._getNoFileText());
        return this;
    },

    /**
     * @returns {String}
     */
    _getNoFileText : function() {
        return this.hasOwnProperty('_noFileText') ?
            this._noFileText :
            this._noFileText = this.elem('text').text();
    },

    _extensionsToMods : {
        'zip' : 'archive',
        'rar' : 'archive',
        'tar' : 'archive',
        'gz' : 'archive',
        '7z' : 'archive',
        'gif' : 'gif',
        'jpg' : 'jpg',
        'jpeg' : 'jpg',
        'png' : 'png',
        'eml' : 'eml',
        'exe' : 'exe',
        'm4a' : 'audio',
        'ogg' : 'audio',
        'mp3' : 'mp3',
        'wav' : 'wav',
        'wma' : 'wma',
        'flv' : 'video',
        'mov' : 'mov',
        'wmv' : 'wmv',
        'mp4' : 'mp4',
        'avi' : 'avi',
        'xls' : 'xls',
        'doc' : 'doc',
        'docx' : 'doc',
        'txt' : 'txt',
        'pdf' : 'pdf',
        'ppt' : 'ppt'
    },

    /**
     * @param {String} fileName
     * @returns {String}
     */
    _getExtension : function(fileName) {
        return this._extensionsToMods[fileName.split('.').pop().toLowerCase()] || '';
    },

    /**
     * @param {String} extension
     * @returns {this}
     */
    _setExtension : function(extension) {
        return this.setMod(this.elem('holder'), 'file', extension || this.params.unknownType);
    },

    getDefaultParams : function() {
        return { unknownType : 'unknown' } // TODO: используетс ли этот параметр?
    },

    /**
     * @returns {BEM.DOM}
     */
    _getButton : function() {
        return this._button || (this._button = this.findBlockOn('button', 'button'));
    },

    /**
     * Проверяет в фокусе ли контрол
     * @returns {Boolean}
     */
    _isControlFocused : function() {
        try {
            return this.containsDomElem(DOM.doc.activeElement);
        } catch(e) {
            return false;
        }
    }
}, /** @lends Attach */{
    live : function() {
        this
            .liveBindTo('change', function() { this._update() })
            .liveBindTo('control', 'focusin focusout',  function(e) {
                this._getButton().toggleMod('focused', 'yes', '', e.type === 'focusin');
            });

        if ($.browser && $.browser.msie && parseInt($.browser.version) <= 8) {
            var intervalId,
                prevPath;
            this.liveBindTo('click', function() {
                if (typeof prevPath == 'undefined') prevPath = this.val();
                var _this = this;
                // TODO: заменить на поведение аналогичное блоку input (использование модуля tick)
                intervalId = setInterval(function() {
                    var path = _this.val();
                    if (prevPath != path) {
                        clearInterval(intervalId);
                        prevPath = path;
                        _this._update();
                    }
                }, 300);
            });
        }

        return false;
    }
});

provide(DOM);

});
