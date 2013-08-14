({
    block: 'page',
    head: [
        { elem: 'css', url: '_simple.css', ie: false },
        { elem: 'js', url: '_simple.js' }
    ],
    content: [
        {
            block: 'input',
            id: 'id0',
            mods: { 'disabled': true },
            name: 'name0',
            val: 'value0'
        },
        {
            block: 'input',
            id: 'id1',
            name: 'name1',
            val: 'value1'
        },
        {
            block: 'input',
            mods: { 'has-clear': true },
            id: 'id2',
            name: 'name2',
            val: 'value2'
        },
        {
            block: 'input',
            mods: { 'has-hint': true },
            id: 'id3',
            name: 'name3',
            val: '',
            hint: 'hint3'
        },
        {
            block: 'input',
            mods: { 'has-hint': true, 'has-label': true },
            id: 'id4',
            name: 'name4',
            val: '',
            hint: 'hint4',
            label: 'label4'
        },
        {
            block: 'input',
            mods: { 'has-hint': true, 'has-label': true },
            id: 'id5',
            name: 'name5',
            val: 'value5',
            hint: 'hint5',
            label: 'label5',
            maxLength: 42,
            tabIndex: 42,
            autocomplete: false
        },
        {
            block: 'input',
            mods: { 'has-hint': true, 'has-label': true, 'has-samples': true },
            id: 'id6',
            name: 'name6',
            val: 'value6',
            hint: 'hint6',
            label: 'label6',
            samples: ['sample1', 'sample2']
        },
        {
            block: 'input',
            mods: { 'has-hint': true, 'has-label': true, 'has-samples': true },
            id: 'id7',
            name: 'name7',
            val: 'value7',
            hint: 'hint7',
            label: 'label7',
            samples: [{ text: 'sample1', val: 'value1' }, { text: 'sample2', val: 'value2' }]
        },
        { tag: 'br' },
        {
            block: 'input',
            mods: { 'has-samples': true },
            val: 'value',
            content: [
                { elem: 'control' },
                {
                    elem: 'samples',
                    samples: [{ text: 'sample1', val: 'value1' }, { text: 'sample2', val: 'value2' }]
                }
            ]
        }
    ].map(function(input) {
        return {
            tag: 'p',
            content: input
        };
    })
})
