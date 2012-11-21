({
    block: 'b-page',
    title: 'С сообщением об ошибке',
    head: [
        { elem: 'css', url: '_20-message-error_bem.css', ie: false },
        { elem: 'css', url: '_20-message-error_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_20-message-error_bem.js' }
    ],
    content: {
        attrs: { style: 'width: 400px; padding: 20px' },
        content: {
            block: 'input',
            mods: { size: 'm' },
            content: [
                { elem: 'input' },
                {
                    elem: 'message',
                    elemMods: { type: 'error', visibility: 'visible' },
                    content: 'ошибка!'
                }
            ]
        }
    }
})
