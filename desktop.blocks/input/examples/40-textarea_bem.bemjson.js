({
    block: 'b-page',
    title: 'Поле ввода текстовой областью в размерах',
    head: [
        { elem: 'css', url: '_40-textarea_bem.css', ie: false },
        { elem: 'css', url: '_40-textarea_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_40-textarea_bem.js' }
    ],
    content: [
        {
            attrs: { style: 'width: 400px; padding: 20px' },
            content: {
                block: 'input',
                mods: { type: 'textarea', size: 'm' },
                value: 'Я текстовая область размера M',
                content: { elem: 'input' }
            }
        },
        {
            attrs: { style: 'width: 400px; padding: 20px' },
            content: {
                block: 'input',
                mods: { type: 'textarea',  size: 'l' },
                value: 'Я текстовая область размера L',
                content: { elem: 'input' }
            }
        }
    ]
})
