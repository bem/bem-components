({
    block: 'b-page',
    title: 'Автокомплит серпа',
    head: [
        { elem: 'css', url: '_85-autocomplete_serp_bem.css', ie: false },
        { elem: 'css', url: '_85-autocomplete_serp_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_85-autocomplete_serp_bem.js' }
    ],
    content: [
        { block: 'i-request' }, // TODO: Оторвать
        {
            tag: 'form',
            attrs: { action: '.', style: 'width: 380px; padding: 20px;' },
            content: {
                block: 'input',
                mods: {  autocomplete: 'yes', size: 'l' },
                js: {
                    dataprovider: { url: 'http://suggest.yandex.ru/suggest-ya.cgi?v=3&callback=?' },
                    popupMods: { size: 'l' }
                },
                content: { elem: 'input', attrs: { name: 'autocomplete' } }
            }
        }
    ]
})
