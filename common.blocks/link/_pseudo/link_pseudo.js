/**
 * @module link
 */

modules.define('link', function(provide, Link) {

/**
 * @exports
 * @class link
 * @bem
 */
provide(Link.decl({ modName : 'pseudo', modVal : true }, /** @lends link.prototype */{
    _onPointerClick : function(e) {
        e.preventDefault();
        this.__base.apply(this, arguments);
    }
}));

});
