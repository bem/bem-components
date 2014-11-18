({
    block : 'page',
    title : 'bem-components: datepicker',
    mods : { theme : 'simple' },
    head : [
        { elem : 'css', url : '_datepicker.css' },
        { elem : 'js', url : '_datepicker.js' }
    ],
    content : [
        {
            block : 'input',
            mods : { theme : 'simple', type : 'datepicker' }
        }
    ]
});
