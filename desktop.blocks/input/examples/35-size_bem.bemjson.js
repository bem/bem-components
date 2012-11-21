({
    block: 'b-page',
    title: 'В размерах с кнопками',
    head: [
        { elem: 'css', url: '_35-size_bem.css', ie: false },
        { elem: 'css', url: '_35-size_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_35-size_bem.js' }
    ],
    content: [
        {
            tag: 'h3',
            attrs: { style: 'margin: 20px 10px; 0' },
            content: 'Инпут как блочный элемент в table'
        },
        {
            block: 'b-layout-table',
            mods: { layout: '60-40' },
            content: [
                {
                    elem: 'row',
                    content: [
                        {
                            elem: 'cell',
                            elemMods: { position: 'l'},
                            content: {
                                block: 'input',
                                mods: { size: 'm', 'has-clear': 'yes' },
                                content: [
                                    { elem: 'hint', content: 'С шириной 100%' },
                                    { elem: 'input', clear: { elem: 'clear' } }
                                ]
                            }
                        },
                        {
                            elem: 'cell',
                            content: {
                                block: 'button',
                                mods: { size: 'm' },
                                type: 'button',
                                content: 'Кнопка размером M'
                            }
                        }
                    ]
                }
            ]
        },
        {
            tag: 'h3',
            attrs: { style: 'margin: 20px 10px; 0' },
            content: 'Инпут как инлайн-блочный элемент в div'
        },
        {
            block: 'i-lego-example',
            content: [
                {
                    tag: 'span',
                    content: 'Просто текст&nbsp;&nbsp;'
                },
                {
                    block: 'input',
                    mods: {  size: 'l' },
                    value: 'с заданной шириной 300px',
                    content: [
                        { elem: 'hint', content: 'Подсказка' },
                        { elem: 'input', clear: { elem: 'clear' } }
                    ]
                },
                {
                    block: 'button',
                    mods: { size: 'm', shadow: 'yes' },
                    type: 'button',
                    content: 'Кнопка размером M'
                }
            ]
        }
    ]

})
