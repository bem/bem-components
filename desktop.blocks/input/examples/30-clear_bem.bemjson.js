({
    block: 'b-page',
    title: 'С кнопкой очистки',
    head: [
        { elem: 'css', url: '_30-clear_bem.css', ie: false },
        { elem: 'css', url: '_30-clear_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_30-clear_bem.js' }
    ],
    content: [
        {
            attrs: { style: 'width: 400px; margin-top: 10px; padding: 10px 20px;' },
            content: {
                block: 'input',
                mods: { size: 'm', 'has-clear': 'yes' },
                content: [
                    { elem: 'hint', content: 'Напиши что-нибудь и увидишь кнопку' },
                    { elem: 'input', clear: { elem: 'clear' } }
                ]
            }
        },
        {
            attrs: { style: 'width: 400px; padding: 10px 20px' },
            content: {
                block: 'input',
                mods: {  size: 'l', 'has-clear': 'yes' },
                content: [
                    { elem: 'hint', content: 'Напиши что-нибудь и увидишь кнопку' },
                    { elem: 'input', clear: { elem: 'clear' } }
                ]
            }
        }
    ]
})
