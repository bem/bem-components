/**
 * @module progressbar
 */

modules.define('progressbar', function(provide, Progressbar) {

/**
 * @exports
 * @class progressbar
 * @bem
 */
provide(Progressbar.decl({ modName : 'theme', modVal : 'simple' }, /** @lends progressbar.prototype */{

    /**
     * Sets text
     * @override
     */
    setVal : function() {
        var res = this.__base.apply(this, arguments);
        this.elem('text').text(this._val);
        return res;
    }

}));

});
