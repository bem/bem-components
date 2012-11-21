({
    block: 'b-page',
    title: 'С меткой',
    head: [
        { elem: 'css', url: '_10-label_bem.css', ie: false },
        { elem: 'css', url: '_10-label_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_10-label_bem.js' }
    ],
    content: {
        attrs: { style: 'width: 400px; padding: 20px' },
        content: {
            block: 'input',
            mods: { size: 'm' },
            content: [
                { elem: 'label', content: 'Метка для инпута' },
                { elem: 'input' }
            ]
        }
    }
})
