({
    block: 'b-page',
    title: 'Автокомплит с переводом слов',
    head: [
        { elem: 'css', url: '_95-autocomplete_slovari_bem.css', ie: false },
        { elem: 'css', url: '_95-autocomplete_slovari_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_95-autocomplete_slovari_bem.js' }
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
                        url: 'http://suggest-slovari.yandex.ru/suggest-lingvo?v=5&lang=en&callback=?'
                    },
                    popupMods: { 'size': 'l', fade: 'yes' }
                },
                content: { elem: 'input', attrs: { name: 'autocomplete' } }
            }
        }
    ]
})
