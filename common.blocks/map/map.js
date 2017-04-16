/**
 * @module map
 * @description TODO.
 */

modules.define('map',
    ['i-bem__dom', 'ymaps'],
    function(provide, DOM, ymaps) {

        DOM.decl('map', {
            onSetMod : {
                'js' : {
                    'inited' : function() {
                        this._drawMap();
                    }
                }
            },

            _drawMap : function() {
                var ctx = this;
                ymaps.ready(function() {
                    ctx.createMap( ctx.params.id, {
                            center : ctx.params.center,
                            zoom : ctx.params.zoom,
                            controls : ctx.params.controls
                        }
                    );
                    ctx.addGeoObjects();
                });
            },

            createMap : function(name, config) {
                this._map = new ymaps.Map(name, config);
            },

            addGeoObjects : function() {
                var ctx = this;
                ctx.params.geoObjects.forEach(
                    function(geoObject) {
                        ctx._map.geoObjects.add(new ymaps.GeoObject({
                            geometry : geoObject
                        }));
                    }
                );
            },

            /**
             * @return {Map | Null} Экземпляр карты, либо null, если карта не инстанцирована.
             */
            getMap : function() {
                return this._map || null;
            }
        });

        provide(DOM);
});
