['link', 'button'].map(function(switcher) {
    return [
        {
            block : 'dropdown',
            mods : { switcher : switcher, 'has-tick' : true },
            switcher : switcher,
            popup : 'bemjson'
        },

        // dropdown__tick should be pushed when switcher's content is array
        {
            block : 'dropdown',
            mods : { switcher : switcher, 'has-tick' : true },
            switcher : { block : switcher, content : [
                { elem : 'text', content : switcher + '-array-content' }
            ] },
            popup : 'bemjson'
        }
    ];
});
