({
    block: 'b-page',
    title: 'input: Поле ввода',
    head: [
        { elem: 'css', url: '_05-input_bem.css', ie: false },
        { elem: 'css', url: '_05-input_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_05-input_bem.js' }
    ],
    content: {
        attrs: { style: 'width: 400px; padding: 20px;' },
        content: {
            block: 'input',
            mods: { size: 'm' },
            content: { elem: 'input' }
        }
    }
})
