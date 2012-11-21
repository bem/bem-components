({
    block: 'b-page',
    title: 'Автокомплит для залипающей поисковой строки',
    head: [
        { elem: 'css', url: '_94-autocomplete_sticky-line_bem.css', ie: false },
        { elem: 'css', url: '_94-autocomplete_sticky-line_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_94-autocomplete_sticky-line_bem.js' }
    ],
    content: [
        { block: 'i-request' }, // TODO: Оторвать
        {
            tag: 'h3',
            attrs: { style: 'font-weight: normal; color: #333;' },
            content: 'Автокомплит покажется только при изменении исходного запроса'
        },
        {
            tag: 'form',
            attrs: { action: '.', style: 'width: 380px; padding: 20px 0;' },
            content: {
                block: 'input',
                mods: {  autocomplete: 'yes', size: 'l' },
                js: {
                    dataprovider: { url: 'http://suggest.yandex.ru/suggest-ya.cgi?v=3&callback=?' },
                    showListOnFocus: false,
                    popupMods: { 'size': 'l' }
                },
                content: { elem: 'input', attrs: { name: 'autocomplete' } },
                value: 'Samsung'
            }
        }
    ]
})
