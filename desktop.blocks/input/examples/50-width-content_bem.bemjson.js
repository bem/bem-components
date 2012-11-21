({
    block: 'b-page',
    title: 'С автоматическим ресайзом по содержимому',
    head: [
        { elem: 'css', url: '_50-width-content_bem.css', ie: false },
        { elem: 'css', url: '_50-width-content_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_50-width-content_bem.js' }
    ],
    content: {
        attrs: { style: 'padding: 20px; width: 600px;' },
        content: [
            {
                tag: 'h3',
                attrs: { style: 'font-weight: normal; color: #333;' },
                content: 'Нажми что-нибудь — «миллиметры», «килограммы», «гигобиты», «нанобайты»'
            },
            {
                block: 'b-search',
                input: {
                    content: {
                        block: 'input',
                        mods: {  size: 'l', width: 'content', 'has-clear': 'yes' },
                        content: { elem: 'input', clear: { elem: 'clear' } }
                    },
                },
                button: {}
            },
            { tag: 'br' },
            {
                block: 'check-button',
                mods: { size: 'm' },
                name: 'porn',
                value: 'мм',
                content: 'миллиметры'
            },
            {

                block: 'check-button',
                mods: { size: 'm' },
                name: 'porn',
                value: 'кг',
                content: 'килограммы'
            },
            {

                block: 'check-button',
                mods: { size: 'm' },
                name: 'porn',
                value: 'Гб',
                content: 'гигобиты'
            },
            {

                block: 'check-button',
                mods: { size: 'm' },
                name: 'porn',
                value: 'нБ',
                content: 'нанобайты'
            }
        ]
    }
})
