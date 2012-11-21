({
    block: 'b-page',
    title: 'Автокомплит с кастомными элементами (на примере Метро)',
    head: [
        { elem: 'css', url: '_90-autocomplete_custom_bem.css', ie: false },
        { elem: 'css', url: '_90-autocomplete_custom_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_90-autocomplete_custom_bem.js' }
    ],
    content: [
        { block: 'i-request' }, // TODO: Оторвать
        {
            tag: 'h3',
            attrs: { style: 'font-weight: normal; color: #333;' },
            content: 'Начните вводить одно из названий метро — Шаболовская, Парк Культуры, Библиотека им. Ленина, Алексеевская...'
        },
        {
            tag: 'form',
            attrs: { action: '.', style: 'width: 380px; padding: 20px 0;' },
            content: {
                block: 'input',
                mods: {  autocomplete: 'yes', size: 'l' },
                js: {
                    dataprovider: { name: 'i-my-dataprovider' },
                    popupMods: { size: 'l' }
                },
                content: { elem: 'input', attrs: { name: 'autocomplete' } }
            }
        }
    ]
})
