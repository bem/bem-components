({
    block: 'b-page',
    title: 'Автокомплит с установкой ширины по ширине инпута и фэйдингом',
    head: [
        { elem: 'css', url: '_75-autocomplete_fade_bem.css', ie: false },
        { elem: 'css', url: '_75-autocomplete_fade_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_75-autocomplete_fade_bem.js' }
    ],
    content: [
        { block: 'i-request' }, // TODO: Оторвать
        {
            tag: 'form',
            attrs: { action: '.', style: 'width: 380px; margin: 0 2% 0; padding: 20px 0;' },
            content: {
                block: 'input',
                mods: {  size: 'l', autocomplete: 'yes' },
                js: {
                    dataprovider: { url: 'http://suggest.yandex.ru/suggest-ya.cgi?v=3&callback=?' },
                    popupMods: { fade: 'yes', size: 'l' }
                },
                content: [
                    { elem: 'hint', content: 'Набери одноклассники' },
                    { elem: 'input', attrs: { name: 'autocomplete' } }
                ]
            }
        }
    ]
})
