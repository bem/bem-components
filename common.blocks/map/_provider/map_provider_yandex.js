/**
 * @module map_provider_yandex
 * @description map block.
 */

modules.define('map',
    ['i-bem__dom', 'ymaps'],
    function(provide, BEMDOM, ymaps) {

    provide(BEMDOM.decl(this.name, {
        onSetMod : {
            'js' : {
                'inited' : function() {
                    this._drawMap();
                }
            }
        },

        /**
         * Draw map unit
         */
        _drawMap : function() {
            var params = this.params;

            ymaps.ready(function() {
                this._map = new ymaps.Map(this.domElem[0], params);
                this._drawGeoObjects();
            }.bind(this));
        },

        /**
         * Draws geoObjects derived from bemjson
         */
        _drawGeoObjects : function() {
            this.params.geoObjects.forEach(function(geoObject) {
                var coords = geoObject.coordinates,
                    properties = geoObject.properties,
                    options = geoObject.options,
                    geoType;

                switch(geoObject.type) {
                    case 'placemark':
                        geoType = 'Point';

                        break;
                    case 'polyline':
                        geoType = 'LineString';

                        break;
                    case 'rectangle':
                        geoType = 'Rectangle';
                }

                this.addGeoObject({
                    type : geoType,
                    coordinates : coords
                }, properties, options);

            }, this);
        },

        /**
         * Add geoObject to map
         * @param {Object} geometry
         * @param {Object} properties
         * @param {Object} options
         */
        addGeoObject : function(geometry, properties, options) {
            ymaps.ready(function() {
                this._map.geoObjects.add(new ymaps.GeoObject(
                    {
                        geometry : geometry,
                        properties : properties
                    },
                    options
                ));
            }.bind(this));
        },

        /**
         * @return {Map | Null}
         */
        getMap : function() {
            return this._map || null;
        }
    }));
});
