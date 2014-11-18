// Сейчас он не актуальный
// TODO: Сделать его с тем же функционалом что и bemhtml

module.exports = function(bh) {

    bh.match('map', function(ctx, json) {
        var objects = [];

        json.geoObjects.forEach(function(geoObject) {
            var geoOptions = geoObject.options,
                preset = geoObject.iconContent &&
                            (geoOptions && geoObject.options.preset || 'islands#blueStretchyIcon'),
                options = {
                    preset : preset,
                    draggable : geoOptions && geoObject.options.draggable
                };

            objects.push({
                type : geoObject.type || 'placemark',
                coordinates : geoObject.coordinates,
                properties : {
                    iconContent : geoObject.iconContent,
                    hintContent : geoObject.hintContent,
                    balloonContent : geoObject.balloonContent
                },
                options : options
            });
        });

        ctx.js({
            center : json.center,
            zoom : json.zoom,
            controls : json.controls,
            geoObjects : objects
        });
    });

};
