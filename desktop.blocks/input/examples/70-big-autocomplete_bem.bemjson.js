({
    block: 'b-page',
    title: 'Автокомплит с установкой ширины по ширине большого инпута',
    head: [
        { elem: 'css', url: '_70-big-autocomplete_bem.css', ie: false },
        { elem: 'css', url: '_70-big-autocomplete_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_70-big-autocomplete_bem.js' }
    ],
    content: [
        { block: 'i-request' }, // TODO: Оторвать
        {
            tag: 'form',
            attrs: { action: '.', style: 'width: 380px; margin: 0 2% 0; padding: 20px 0;' },
            content: {
                block: 'input',
                mods: {  autocomplete: 'yes', size: 'l' },
                js: {
                    dataprovider: { url: 'http://suggest.yandex.ru/suggest-ya.cgi?v=3&callback=?' },
                    popupMods: { size: 'l' }
                },
                content: [
                    { elem: 'hint', content: 'Набери одноклассники' },
                    { elem: 'input', attrs: { name: 'autocomplete' } }
                ]
            }
        }
    ]
})
