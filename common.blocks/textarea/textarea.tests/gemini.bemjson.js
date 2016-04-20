({
    block : 'page',
    title : 'bem-components: textarea',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : 'gemini.css' },
        { elem : 'js', url : 'gemini.js' }
    ],
    content : [
        { tag : 'h2', content : 'islands' },
        [
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm' },
                cls : 'islands-enabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm', disabled : true },
                cls : 'islands-disabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm' },
                val : 'default',
                cls : 'islands-val-enabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm' },
                placeholder : 'placeholder',
                cls : 'islands-placeholder-enabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm', disabled : true },
                val : 'value',
                cls : 'islands-val-disabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm', disabled : true },
                placeholder : 'placeholder',
                cls : 'islands-placeholder-disabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm' },
                val : 'LongValLongValLongValLongValLongValLongVal',
                cls : 'islands-longVal-enabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm' },
                placeholder : 'LongPlaceholderLongPlaceholderLongPlaceholder',
                cls : 'islands-longPlaceholder-enabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm', 'has-clear' : true, disabled : true },
                val : 'LongValLongValLongValLongValLongValLongVal',
                cls : 'islands-longVal-disabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm', disabled : true },
                placeholder : 'LongPlaceholderLongPlaceholderLongPlaceholder',
                cls : 'islands-longPlaceholder-disabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 's' },
                val : 'size s',
                cls : 'islands-sizeS-enabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm' },
                val : 'size m',
                cls : 'islands-sizeM-enabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'l' },
                val : 'size l',
                cls : 'islands-sizeL-enabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'xl' },
                val : 'size xl',
                cls : 'islands-sizeXL-enabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 's', disabled : true },
                val : 'size s',
                cls : 'islands-sizeS-disabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm', disabled : true },
                val : 'size m',
                cls : 'islands-sizeM-disabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'l', disabled : true },
                val : 'size l',
                cls : 'islands-sizeL-disabled'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'xl', disabled : true },
                val : 'size xl',
                cls : 'islands-sizeXL-disabled'
            }
        ].map(function(block) {
                return {
                    tag : 'p',
                    content : block
                };
            }),
        {
            block : 'test',
            content : [
                { tag : 'label', content : 'label' },
                ': ',
                {
                    block : 'textarea',
                    mods : { theme : 'islands', size : 'm' },
                    placeholder : 'placeholder',
                    val : 'some value'
                }
            ],
            attrs : { style : 'margin-bottom: 10px;' },
            cls : 'islands-label-enabled'
        },
        {
            block : 'test',
            content : [
                { tag : 'label', content : 'label' },
                ': ',
                {
                    block : 'textarea',
                    mods : { theme : 'islands', size : 'm', disabled : true }
                }
            ],
            cls : 'islands-label-disabled'
        },
        {
            block : 'test',
            attrs : { style : 'width: 350px;' },
            content : {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm', width : 'available' }
            },
            cls : 'islands-width-available-enabled'
        },
        {
            block : 'test',
            attrs : { style : 'width: 350px;' },
            content : {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm', width : 'available', disabled : true }
            },
            cls : 'islands-width-available-disabled'
        }
    ]
});
