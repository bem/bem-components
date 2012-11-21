({
    block: 'b-page',
    title: 'В таблице',
    head: [
        { elem: 'css', url: '_55-in-table_bem.css', ie: false },
        { elem: 'css', url: '_55-in-table_bem', ie: true },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', 'url': '_55-in-table_bem.js' }
    ],
    content: {
        tag: 'form',
        attrs: { action: '/' },
        content: {
            block: 'mytable',
            tag: 'table',
            content: {
                tag: 'tr',
                content: [
                    {
                        elem: 'td',
                        mods: { type: 'first' },
                        tag: 'td',
                        content: {
                            elem: 'i',
                            content: {
                                block: 'input',
                                mods: { size: 'm' },
                                content: [
                                    { elem: 'label', content: 'Метка для инпута' },
                                    { elem: 'input' },
                                    { elem: 'message', elemMods: { type: 'error', visibility: 'visible' }, content: 'Ошиблись, бывает' },
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
                    },
                    {
                        elem: 'td',
                        tag: 'td',
                        content: {
                            elem: 'i',
                            content: {
                                block: 'input',
                                mods: { size: 'm' },
                                content: [
                                    { elem: 'hint', content: 'ПодсказкаПодсказкаПодсказкаПодсказкаПодсказкаПодсказкаПодсказкаПодсказкаПодсказкаПодсказка' },
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
                    },
                    {
                        elem: 'td',
                        mods: { type: 'last' },
                        tag: 'td',
                        content: {
                            elem: 'i',
                            content: {
                                block: 'input',
                                mods: { type: 'textarea', size: 'm' },
                                content: [
                                    { elem: 'hint', content: 'Подсказка для текстовой области' },
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
                    }
                ]
            }
        }
    }
})
