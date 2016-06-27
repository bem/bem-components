/**
 * @module textarea
 */

modules.define('textarea', ['i-bem-dom', 'input'], function(provide, bemDom, Input) {

/**
 * @exports
 * @class textarea
 * @augments input
 * @bem
 */
provide(bemDom.declBlock(this.name, Input));

});
