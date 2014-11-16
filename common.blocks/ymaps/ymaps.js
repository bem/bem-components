/**
 * @module ymmap
 * @description Provide ymaps (load if it does not exist).
 */

modules.define(
    'ymaps',
    ['loader_type_js', 'ymaps__config'],
    function(provide, loader, cfg) {

/* global ymaps */

function doProvide() {
    /**
     * @exports
     * @type Function
     */
    provide(ymaps);
}

typeof ymaps !== 'undefined'?
    doProvide() :
    loader(cfg.url, doProvide);
});
