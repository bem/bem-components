/**
 * @module textarea
 */

modules.define('textarea', ['i-bem__dom', 'input'], function(provide, BEMDOM, Input) {

/**
 * @exports
 * @class textarea
 * @augments input
 * @bem
 */
provide(BEMDOM.decl({ block : this.name, baseBlock : Input }));

});
