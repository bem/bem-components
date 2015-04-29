module.exports = function(bh) {
    bh.match('a11y-test', function(ctx, json) {
        ctx.js(true);
        ctx.attr('role', 'application');
        ctx.content([
            { elem : 'head' },
            { elem : 'body', items : json.items }
        ]);
    });

    bh.match('a11y-test__head', function(ctx) {
        ctx.content([
            {
                elem : 'cell',
                attrs : { 'aria-hidden' : true },
                content : 'Block'
            },
            {
                elem : 'cell',
                attrs : { 'aria-hidden' : true },
                content : 'JAWS TAB'
            },
            {
                elem : 'cell',
                attrs : { 'aria-hidden' : true },
                content : 'JAWS Arrow'
            },
            {
                elem : 'cell',
                attrs : { 'aria-hidden' : true },
                content : 'VoiceOver TAB'
            }
        ]);
    });

    bh.match('a11y-test__body', function(ctx, json) {
        ctx.content(json.items.map(function(item) {
            return {
                elem : 'row',
                content : [
                    {
                        elem : 'cell',
                        content : item.bemjson
                    },
                    {
                        elem : 'cell',
                        attrs : { 'aria-hidden' : true },
                        content : item.tab
                    },
                    {
                        elem : 'cell',
                        attrs : { 'aria-hidden' : true },
                        content : item.arrow
                    },
                    {
                        elem : 'cell',
                        attrs : { 'aria-hidden' : true },
                        content : item.vo
                    }
                ]
            };
        }));
    });
};
