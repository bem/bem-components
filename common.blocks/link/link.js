/**
 * @module link
 */

modules.define('link', ['i-bem__dom', 'base-control'], function(provide, BEMDOM, BaseControl) {

/**
 * @exports
 * @class link
 * @augments base-control
 * @bem
 */
provide(BEMDOM.decl({ block : this.name, baseBlock : BaseControl }, /** @lends link.prototype */{
    _onPointerClick : function(e) {
        this.hasMod('disabled')?
            e.preventDefault() :
            this.emit('click');
    }
}, /** @lends link */{
    live : function() {
        this.liveBindTo('control', 'pointerclick', this.prototype._onPointerClick);
        return this.__base.apply(this, arguments);
    }
}));

});
