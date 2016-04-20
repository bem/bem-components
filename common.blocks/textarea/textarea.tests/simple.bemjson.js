({
    block : 'page',
    title : 'bem-components: textarea',
    mods : { theme : 'islands' },
    head : [
        {
            elem : 'conditional-comment',
            condition : '> IE 8',
            msieOnly : false,
            content : { elem : 'css', url : 'simple.css' }
        },
        {
            elem : 'conditional-comment',
            condition : '<= IE 8',
            content : { elem : 'css', url : 'simple.ie.css' }
        }
    ],
    scripts : [{ elem : 'js', url : 'simple.js' }],
    content : [

        { tag : 'h2', content : 'default' },
        { tag : 'p', content : { block : 'textarea', val : 'default' } },
        { tag : 'p', content : { block : 'textarea', placeholder : 'placeholder' } },
        { tag : 'p', content : {
            block : 'textarea',
            val : 'disabled',
            placeholder : 'placeholder',
            mods : { disabled : true }
        } },
        { tag : 'hr' },

        { tag : 'h2', content : 'simple' },
        { tag : 'p', content : {
            block : 'textarea',
            mods : { theme : 'simple' },
            val : 'simple'
        } },
        { tag : 'p', content : {
            block : 'textarea',
            mods : { theme : 'simple' },
            placeholder : 'placeholder'
        } },
        { tag : 'p', content : {
            block : 'textarea',
            mods : { theme : 'simple', disabled : true },
            val : 'disabled',
            placeholder : 'placeholder'
        } },
        { attrs : { style : 'width: 350px;' }, content : {
            block : 'textarea',
            mods : { theme : 'simple', size : 'm', width : 'available' },
            val : 'width_available',
            placeholder : 'placeholder'
        } },
        { tag : 'hr' },

        { tag : 'h2', content : 'islands' },
        { tag : 'p', content : {
            block : 'textarea',
            mods : { theme : 'islands', size : 'm' },
            val : 'islands'
        } },
        { tag : 'p', content : {
            block : 'textarea',
            mods : { theme : 'islands', size : 'm', disabled : true },
            val : 'disabled'
        } },
        { attrs : { style : 'width: 350px;' }, content : {
            block : 'textarea',
            mods : { theme : 'islands', size : 'm', width : 'available' },
            val : 'width_available',
            placeholder : 'placeholder'
        } },
        { tag : 'h3', content : 'size' },
        { tag : 'p', content : {
            block : 'textarea',
            mods : { theme : 'islands', size : 's' },
            val : 'size s',
            placeholder : 'placeholder'
        } },
        { tag : 'p', content : {
            block : 'textarea',
            mods : { theme : 'islands', size : 'm' },
            val : 'size m',
            placeholder : 'placeholder'
        } },
        { tag : 'p', content : {
            block : 'textarea',
            mods : { theme : 'islands', size : 'l' },
            val : 'size l',
            placeholder : 'placeholder'
        } },
        { tag : 'p', content : {
            block : 'textarea',
            mods : { theme : 'islands', size : 'xl' },
            val : 'size xl',
            placeholder : 'placeholder'
        } }
    ]
});
