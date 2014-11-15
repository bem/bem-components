({
    block : 'page',
    title : 'YMaps Examples',
    head : [
        { elem : 'css', url : '_map.css' },
        { elem : 'js', url : '_map.js' }
    ],
    content : [
        {
            block : 'wrapper',
            content : {
                block : 'map',
                id : 'test_map',
                center : [55.751574, 37.573856],
                zoom : 10,
                controls : ['default'],
                geoObjects : [{
                    type : 'Point',
                    coordinates :  [55.751574, 37.573856]
                }]
            }
        }
    ]
})
