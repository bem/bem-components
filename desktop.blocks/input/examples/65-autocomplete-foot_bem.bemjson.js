({
    block: 'b-page',
    title: 'Простой автокомплит с элементом foot',
    head: [
        { elem: 'css', url: '_65-autocomplete-foot_bem.css', ie: false },
        { elem: 'css', url: '_65-autocomplete-foot_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_65-autocomplete-foot_bem.js' }
    ],
    content: [
        { block: 'i-request' }, // TODO: Оторвать
        {
            tag: 'form',
            attrs: { action: '.', style: 'margin: 0 2%' },
            content: {
                block: 'input',
                js: {
                    dataprovider: { url: 'http://suggest.yandex.ru/suggest-ya.cgi?v=3&callback=?' },
                    popupMods: { size: 'l' },
                    foot: [
                        'foot',
                        'слово какккк <a class="b-link" href="ya.ru">Мои находки</a>'
                    ]
                },
                mods: {  autocomplete: 'yes', size: 'l' },
                content: [
                    {
                        elem: 'input',
                        attrs: { name: 'autocomplete' }
                    }
                ]
            }
        }
    ]
})
