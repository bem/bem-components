/**
 * @module progressbar
 */

/**
 * @exports
 * @class progressbar
 * @bem
 */
export default function(Progressbar) {
return Progressbar.declMod({ modName : 'theme', modVal : 'simple' }, /** @lends progressbar.prototype */{

    /**
     * Sets text
     * @override
     */
    setVal : function() {
        const res = this.__base.apply(this, arguments);
        this.elem('text').text(this._val);
        return res;
    }

});
};
