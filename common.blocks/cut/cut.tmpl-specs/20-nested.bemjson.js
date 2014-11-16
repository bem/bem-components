({
    block : 'cut',
    js : {
        expandedText : 'cut-hide'
    },
    switcher : 'cut-show',
    content : [
        'cut-text',
        {
            block : 'cut',
            js : {
                expandedText : 'subcut-hide'
            },
            switcher : 'subcut-show',
            content : 'subcut-text'
        }
    ]
})
