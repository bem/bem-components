({
    block : 'page',
    title : 'YMaps Examples',
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [
        {
            block : 'wrapper',
            content : {
                block : 'map',
                mods : {
                    provider : 'yandex'
                },
                center : [55.751574, 37.573856],
                zoom : 10,
                controls : ['zoomControl'],
                geoObjects : [
                    {
                        coordinates : [55.621515, 37.333333],
                        hintContent : 'Я без текста :('
                    },
                    {
                        type : 'placemark',
                        coordinates : [55.641515, 37.353333],
                        hintContent : 'И я без текста :('
                    },
                    {
                        coordinates : [55.751574, 37.573856],
                        iconContent : 'Длинный текст'
                    }
                ]
            }
        },
        {
            block : 'wrapper',
            content : {
                block : 'map',
                mods : {
                    provider : 'yandex'
                },
                center : [55.75399400, 37.62209300],
                zoom : 10,
                controls : ['default'],
                geoObjects : [
                    {
                        coordinates : [55.751574, 37.573856],
                        iconContent : 'Отсюда'
                    },
                    {
                        coordinates : [55.621515, 37.433333],
                        iconContent : 'Сюда'
                    },
                    {
                        type : 'polyline',
                        coordinates : [
                            [55.751574, 37.573856],
                            [55.751574, 37.503856],
                            [55.621515, 37.433333]
                        ],
                        options : {
                            draggable : true
                        }
                    }
                ]
            }
        },
        {
            block : 'wrapper',
            content : {
                block : 'map',
                mods : {
                    provider : 'yandex'
                },
                center : [44.98479047, 34.11593889],
                zoom : 11,
                controls : ['default'],
                geoObjects : [
                    {
                        coordinates : [55.751574, 37.573856],
                        iconContent : 'Отсюда'
                    },
                    {
                        coordinates : [55.621515, 37.433333],
                        iconContent : 'Сюда'
                    },
                    {
                        type : 'polyline',
                        coordinates : [
                            [55.751574, 37.573856],
                            [55.751574, 37.503856],
                            [55.621515, 37.433333]
                        ],
                        options : {
                            draggable : true
                        }
                    },
                    {
                        type : 'rectangle',
                        coordinates : [
                            [45.00866307, 34.00676225],
                            [44.93750295, 34.03766130]
                        ],
                        options : {
                            draggable : true
                        }
                    },
                    {
                        type : 'rectangle',
                        coordinates : [
                            [45.04420979, 34.08572649],
                            [45.00525331, 34.14340471]
                        ],
                        options : {
                            draggable : true
                        }
                    },
                    {
                        type : 'rectangle',
                        coordinates : [
                            [44.95578268, 34.13134795],
                            [44.93879047, 34.20793889]
                        ],
                        options : {
                            draggable : true
                        }
                    }
                ]
            }
        }
    ]
})
