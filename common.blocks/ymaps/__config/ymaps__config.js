/**
 * @module ymaps__config
 * @description Configuration for Yandex Map api loader
 */

modules.define('ymaps__config', function(provide) {

provide(/** @exports */{
    /**
     * URL for loading YMaps API if it does not exist
     */
    url : '//api-maps.yandex.ru/2.1/?lang=ru_RU&load=package.full'
});

});
