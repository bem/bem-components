({
    block: "page",
    head: [
        { elem: "css", url: "_simple.css", ie: false },
        { elem: "js", url: "_simple.js" }
    ],
    content: {
        block: 'input',
        mods: { size: 's', autofocus: 'focused' },
        content: { elem: 'control' },
        value: 'bla'
    }
})
