({
    block: 'b-page',
    title: 'Простой автокомплит',
    head: [
        { elem: 'css', url: '_60-autocomplete_bem.css', ie: false },
        { elem: 'css', url: '_60-autocomplete_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_60-autocomplete_bem.js' }
    ],
    content: [
        { block: 'i-request' }, // TODO: Оторвать
        {
            tag: 'form',
            attrs: { action: '.', style: 'padding: 20px 2%' },
            content: {
                block: 'input',
                mods: {  autocomplete: 'yes', size: 'm' },
                js: {
                    dataprovider: { url: 'http://suggest.yandex.ru/suggest-ya.cgi?v=3&callback=?' }
                },
                content: { elem: 'input', attrs: { name: 'autocomplete' } }
            }
        }
    ]
})
