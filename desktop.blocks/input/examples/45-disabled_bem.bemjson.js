({
    block: 'b-page',
    title: 'Неактивное состояние',
    head: [
        { elem: 'css', url: '_45-disabled_bem.css', ie: false },
        { elem: 'css', url: '_45-disabled_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_45-disabled_bem.js' }
    ],
    content: [
        {
            attrs: { style: 'width: 400px; padding: 20px' },
            content: {
                block: 'input',
                mods: {  disabled: 'yes', size: 'l' },
                value: 'Я неактивная текстовая область',
                content: { elem: 'input' }
            }
        },
        {
            attrs: { style: 'width: 400px; margin: 20px' },
            content: {
                block: 'input',
                mods: {  type: 'textarea', disabled: 'yes', size: 'l' },
                value: 'Я неактивная текстовая область',
                content: { elem: 'input' }
            }
        }
    ]
})
