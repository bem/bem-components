({
    block: 'b-page',
    title: 'Автокомплит маркета',
    head: [
        { elem: 'css', url: '_80-autocomplete_market_bem.css', ie: false },
        { elem: 'css', url: '_80-autocomplete_market_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_80-autocomplete_market_bem.js' }
    ],
    content: [
        { block: 'i-request' }, // TODO: Оторвать
        {
            tag: 'form',
            attrs: { action: '.', style: 'width: 380px; padding: 20px' },
            content: {
                block: 'input',
                mods: {  autocomplete: 'yes', size: 'l' },
                js: {
                    dataprovider: {
                        name: 'i-href-dataprovider',
                        url: 'http://suggest.market.yandex.ru/suggest-market?callback=?'
                    },
                    popupMods: { size: 'l' }
                },
                content: { elem: 'input', attrs: { name: 'autocomplete' } }
            }
        }
    ]
})
