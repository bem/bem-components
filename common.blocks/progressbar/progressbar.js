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
provide(BEMDOM.decl(this.name, /** @lends progressbar.prototype */{
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
        this.elem('bar').css('width', this._checkProgressNum(progress) + '%');
    },

    /**
     * Sets bar's width and update text
     * @param {Number|String} progress
     */
    setProgress : function(progress) {
        this._setBarWith(progress);
        this.elem('text').text(progress);
    }
}));

});
