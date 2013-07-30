({
    block: "page",
    head: [
        { elem: "css", url: "_simple.css", ie: false },
        { elem: "js", url: "_simple.js" }
    ],
    content: [
        {
            block: 'input',
            mods: { size: 's' },
            id: 'id1',
            name: 'name1',
            val: 'value1'
        },
        { tag: 'br' },
        {
            block: 'input',
            mods: { size: 's', 'has-clear': true },
            id: 'id2',
            name: 'name2',
            val: 'value2'
        },
        { tag: 'br' },
        {
            block: 'input',
            mods: { size: 's', 'has-hint': true },
            id: 'id3',
            name: 'name3',
            val: 'value3',
            hint: 'hint3'
        },
        { tag: 'br' },
        {
            block: 'input',
            mods: { size: 's', 'has-hint': true },
            id: 'id4',
            name: 'name4',
            val: 'value4',
            hint: 'hint4',
            label: 'label4'
        },
        {
            block: 'input',
            mods: { size: 's', 'has-hint': true },
            id: 'id5',
            name: 'name5',
            val: 'value5',
            hint: 'hint5',
            label: 'label5',
            maxLength: 42,
            tabIndex: 42,
            autocomplete: false
        },
        { tag: 'br' },
        {
            block: 'input',
            mods: { size: 's', 'has-hint': true },
            id: 'id6',
            name: 'name6',
            val: 'value6',
            hint: 'hint6',
            label: 'label6',
            samples: ['sample1', 'sample2']
        },
        {
            block: 'input',
            mods: { size: 's', 'has-hint': true },
            id: 'id7',
            name: 'name7',
            val: 'value7',
            hint: 'hint7',
            label: 'label7',
            samples: [{ text: 'sample1', val: 'value1' }, { text: 'sample2', val: 'value2' }]
        },
        {
            block: 'input',
            mods: { size: 's', 'has-hint': true },
            id: 'id6',
            name: 'name8',
            val: 'value8',
            hint: 'hint8',
            label: 'label8',
            messages: {
                elem: 'message',
                elemMods: { type: 'error', visibility: 'visible' },
                content: 'error message'
            }
        },
        {
            block: 'input',
            mods: { size: 's', 'has-hint': true },
            id: 'id6',
            name: 'name9',
            val: 'value9',
            hint: 'hint9',
            label: 'label9',
            messages: [
                {
                    elem: 'message',
                    elemMods: { type: 'error' },
                    content: 'error message'
                },
                {
                    elem: 'message',
                    elemMods: { type: 'info', visibility: 'visible' },
                    content: 'error message'
                }
            ]
        },
    ]
})
