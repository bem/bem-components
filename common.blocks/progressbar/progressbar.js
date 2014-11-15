/**
 * @module progressbar
 */

modules.define(
    'progressbar', ['i-bem__dom'], function(provide, BEMDOM) {

/**
 * @exports
 * @class progressbar
 * @bem
 */
provide(BEMDOM.decl({ block : this.name }, /** @lends progressbar.prototype */{
    onSetMod : {
        'js' : {
            'inited' : function() {
                this._progress = this.params.progress;
                this.setProgress(this._progress);
            }
        }
    },

    _checkProgressNum : function(num) {
        if(num < 0) {
            return 0;
        } else if(num > 100) {
            return 100;
        } else {
            return num;
        }
    },

    _setBarWith : function(progress) {
        this.elem('bar').css('width', 100 - this._checkProgressNum(progress) + '%');
    },

    setProgress : function(progress) {
        this._setBarWith(progress);
        BEMDOM.update(this.elem('text'), progress);
    }
}));

});
