/**
 * @module attach
 */

modules.define(
    'attach',
    ['i-bem__dom', 'jquery', 'BEMHTML', 'strings__escape'],
    function(provide, BEMDOM, $, BEMHTML, escape) {

/**
 * @exports
 * @class attach
 * @bem
 */
provide(BEMDOM.decl(this.name, /** @lends attach.prototype */{
    beforeSetMod : {
        'focused' : {
            'true' : function() {
                return !this.hasMod('disabled');
            }
        }
    },

    onSetMod : {
        'js' : {
            'inited' : function() {
                this._focused = false;
            }
        },

        'focused' : {
            'true' : function() {
                this._focused || this._focus();
            },

            '' : function() {
                this._focused && this._blur();
            }
        },

        'disabled' : function(modName, modVal) {
            this.elem('control').prop(modName, !!modVal);
            this._getButton().setMod(modName, modVal);
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

    _onFocus : function() {
        this._focused = true;
        this.setMod('focused');
    },

    _onBlur : function() {
        this._focused = false;
        this.delMod('focused');
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
    },

    _focus : function() {
        this.elem('control').focus();
    },

    _blur : function() {
        this.elem('control').blur();
    }
}, /** @lends attach */{
    live : function() {
        this
            .liveBindTo('control', 'focusin', function() {
                this._onFocus();
            })
            .liveBindTo('control', 'focusout', function() {
                this._onBlur();
            })
            .liveBindTo('clear', 'pointerclick', function() {
                this._onClearClick();
            })
            .liveBindTo('control', 'change', function() {
                this._onChange();
            });
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
