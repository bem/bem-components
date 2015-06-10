({
    block : 'page',
    title : 'bem-components: input',
    mods : { theme : 'islands' },
    head : [
        {
            elem : 'conditional-comment',
            condition : '> IE 8',
            msieOnly : false,
            content : { elem : 'css', url : '_simple.css' }
        },
        {
            elem : 'conditional-comment',
            condition : '<= IE 8',
            content : { elem : 'css', url : '_simple.ie.css' }
        }
    ],
    scripts : [{ elem : 'js', url : '_simple.js' }],
    content : [

        { tag : 'h2', content : 'default' },
        { tag : 'p', content : { block : 'input', val : 'default' } },
        { tag : 'p', content : { block : 'input', placeholder : 'placeholder' } },
        { tag : 'p', content : {
            block : 'input',
            val : 'disabled',
            placeholder : 'placeholder',
            mods : { disabled : true }
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { type : 'search' },
            val : 'search',
            placeholder : 'query'
        } },
        { attrs : { style : 'width: 350px;' }, content : {
            block : 'input',
            mods : { width : 'available' },
            val : 'width_available'
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'simple' },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'simple' },
            val : 'simple'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'simple', 'has-clear' : true },
            placeholder : 'placeholder'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'simple', 'has-clear' : true, disabled : true },
            val : 'disabled',
            placeholder : 'placeholder'
        } },
        { tag : 'p', attrs : { style : 'width: 350px;' }, content : {
            block : 'input',
            mods : { theme : 'simple', width : 'available', 'has-clear' : true, size : 'm' },
            val : 'width',
            placeholder : 'placeholder'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'simple', 'has-clear' : true, type : 'search' },
            val : 'search',
            placeholder : 'query'
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'islands' },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'islands', size : 'm' },
            val : 'islands'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'islands', 'has-clear' : true, size : 'm', disabled : true },
            val : 'disabled'
        } },

        { tag : 'h3', content : 'clear' },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'islands', 'has-clear' : true, size : 'm' },
            val : 'has-clear',
            placeholder : 'placeholder'
        } },

        { tag : 'h3', content : 'width' },
        { tag : 'p', attrs : { style : 'width: 350px;' }, content : {
            block : 'input',
            mods : { theme : 'islands', width : 'available', 'has-clear' : true, size : 'm' },
            val : 'available',
            placeholder : 'placeholder'
        } },

        { tag : 'h3', content : 'type' },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'islands', 'has-clear' : true, size : 'm', type : 'password' },
            val : 'password',
            placeholder : 'password'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'islands', 'has-clear' : true, size : 'm', type : 'search' },
            val : 'search',
            placeholder : 'query'
        } },

        { tag : 'h3', content : 'label' },
        { tag : 'p', content : [
            { tag : 'label', attrs : { 'for' : 'with-label' }, content : 'label' },
            ': ',
            {
                block : 'input',
                id : 'with-label',
                mods : { theme : 'islands', 'has-clear' : true, size : 'm' },
                val : 'separate',
                placeholder : 'placeholder'
            }
        ] },

        { tag : 'h3', content : 'size' },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'islands', 'has-clear' : true, size : 's' },
            val : 'size s',
            placeholder : 'placeholder'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'islands', 'has-clear' : true, size : 'm' },
            val : 'size m',
            placeholder : 'placeholder'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'islands', 'has-clear' : true, size : 'l' },
            val : 'size l',
            placeholder : 'placeholder'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'islands', 'has-clear' : true, size : 'xl' },
            val : 'size xl',
            placeholder : 'placeholder'
        } }
    ]
});
