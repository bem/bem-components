({
    block: 'b-page',
    title: 'С меткой и подсказкой',
    head: [
    	{ elem: 'css', url: '_15-label-hint_bem.css', ie: false },
    	{ elem: 'css', url: '_15-label-hint_bem', ie: true },
    	{ block: 'i-jquery', elem: 'core' },
    	{ elem: 'js', url: '_15-label-hint_bem.js' }
    ],
    content: {
        attrs: { style: 'width: 400px; padding: 20px;' },
        content: {
            block: 'input',
            mods: { size: 'm' },
            content: [
                { elem: 'label', content: 'Метка для инпута' },
                { elem: 'hint', content: 'Хинт для инпута' },
                { elem: 'input' }
            ]
        }
    }
})
