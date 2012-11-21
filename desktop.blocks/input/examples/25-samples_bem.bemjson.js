({
    block: 'b-page',
    title: 'C примерами',
    head: [
        { elem: 'css', url: '_25-samples_bem.css', ie: false },
        { elem: 'css', url: '_25-samples_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_25-samples_bem.js' }
    ],
    content: {
        attrs: { style: 'width: 400px; padding: 20px' },
        content: {
            block: 'input',
            mods: { size: 'm' },
            content: [
                { elem: 'input' },
                {
                    elem: 'samples',
                    content: [
                        {
                            elem: 'sample',
                            content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'пример 1' }
                        },
                        ', ',
                        {
                            elem: 'sample',
                            content: { block: 'b-link', mods: { pseudo: 'yes' }, content: 'пример 2' }
                        }
                    ]
                }
            ]
        }
    }
})
