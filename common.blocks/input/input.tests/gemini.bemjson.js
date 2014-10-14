({
    block : 'page',
    title : 'bem-components: input',
    mods : { theme : 'islands' },
    head : [
        { elem : 'css', url : '_gemini.css' },
        { elem : 'js', url : '_gemini.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        {
            block : 'test',
            content : { block : 'input' },
            cls : 'default-enabled'
        },
        {
            block : 'test',
            content : {
                block : 'input',
                mods : { disabled : true }
            },
            cls : 'default-disabled'
        },
        {
            block : 'test',
            content : {
                block : 'input',
                val : 'default'
            },
            cls : 'default-val-enabled'
        },
        {
            block : 'test',
            content : {
                block : 'input',
                placeholder : 'placeholder'
            },
            cls : 'default-placeholder-enabled'
        },
        {
            block : 'test',
            content : {
                block : 'input',
                mods : { 'has-clear' : true, disabled : true },
                val : 'value'
            },
            cls : 'default-val-disabled'
        },
        {
            block : 'test',
            content : {
                block : 'input',
                mods : { 'has-clear' : true, disabled : true },
                placeholder : 'placeholder'
            },
            cls : 'default-placeholder-disabled'
        },
        {
            block : 'test',
            content : {
                block : 'input',
                mods : { 'has-clear' : true },
                val : 'LongValLongValLongValLongValLongValLongVal'
            },
            cls : 'default-longVal-enabled'
        },
        {
            block : 'test',
            content : {
                block : 'input',
                mods : { 'has-clear' : true },
                placeholder : 'LongPlaceholderLongPlaceholderLongPlaceholder'
            },
            cls : 'default-longPlaceholder-enabled'
        },
        {
            block : 'test',
            content : {
                block : 'input',
                mods : { 'has-clear' : true, disabled : true },
                val : 'LongValLongValLongValLongValLongValLongVal'
            },
            cls : 'default-longVal-disabled'
        },
        {
            block : 'test',
            content : {
                block : 'input',
                mods : { 'has-clear' : true, disabled : true },
                placeholder : 'LongPlaceholderLongPlaceholderLongPlaceholder'
            },
            cls : 'default-longPlaceholder-disabled'
        },
        {
            block : 'test',
            content : [
                { tag : 'label', content : 'label' },
                ': ',
                {
                    block : 'input',
                    mods : { 'has-clear' : true },
                    placeholder : 'placeholder'
                }
            ],
            cls : 'default-label-enabled'
        },
        {
            block : 'test',
            content : [
                { tag : 'label', content : 'label' },
                ': ',
                {
                    block : 'input',
                    mods : { 'has-clear' : true, disabled : true }
                }
            ],
            cls : 'default-label-disabled'
        },
        { tag : 'br' },
        {
            block : 'test',
            content : {
                block : 'input',
                mods : { type : 'textarea', 'has-clear' : true },
                val : 'value',
                cls : 'default-textarea-val-enabled'
            },
            attrs : { style : 'padding-top: 5px;' }
        },
        { tag : 'br' },
        { block : 'test', content : {
            block : 'input',
            mods : { type : 'textarea', 'has-clear' : true },
            placeholder : 'placeholder',
            cls : 'default-textarea-placeholder-enabled'
        } },
        { tag : 'br' },
        { block : 'test', content : {
            block : 'input',
            mods : { type : 'textarea', 'has-clear' : true, disabled : true },
            val : 'value',
            cls : 'default-textarea-val-disabled'
        } },
        { tag : 'br' },
        { block : 'test', content : {
            block : 'input',
            mods : { type : 'textarea', 'has-clear' : true, disabled : true },
            placeholder : 'placeholder',
            cls : 'default-textarea-placeholder-disabled'
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'islands' },
        [
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm' },
                cls : 'islands-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm', disabled : true },
                cls : 'islands-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm' },
                val : 'default',
                cls : 'islands-val-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm' },
                placeholder : 'placeholder',
                cls : 'islands-placeholder-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm', 'has-clear' : true, disabled : true },
                val : 'value',
                cls : 'islands-val-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm', 'has-clear' : true, disabled : true },
                placeholder : 'placeholder',
                cls : 'islands-placeholder-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm', 'has-clear' : true },
                val : 'LongValLongValLongValLongValLongValLongVal',
                cls : 'islands-longVal-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm', 'has-clear' : true },
                placeholder : 'LongPlaceholderLongPlaceholderLongPlaceholder',
                cls : 'islands-longPlaceholder-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm', 'has-clear' : true, disabled : true },
                val : 'LongValLongValLongValLongValLongValLongVal',
                cls : 'islands-longVal-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm', 'has-clear' : true, disabled : true },
                placeholder : 'LongPlaceholderLongPlaceholderLongPlaceholder',
                cls : 'islands-longPlaceholder-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 's' },
                val : 'size s',
                cls : 'islands-sizeS-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm' },
                val : 'size m',
                cls : 'islands-sizeM-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'l' },
                val : 'size l',
                cls : 'islands-sizeL-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'xl' },
                val : 'size xl',
                cls : 'islands-sizeXL-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 's', disabled : true },
                val : 'size s',
                cls : 'islands-sizeS-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm', disabled : true },
                val : 'size m',
                cls : 'islands-sizeM-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'l', disabled : true },
                val : 'size l',
                cls : 'islands-sizeL-disabled'
            },
            {
                block : 'input',
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
                    block : 'input',
                    mods : { theme : 'islands', size : 'm', 'has-clear' : true },
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
                    block : 'input',
                    mods : { theme : 'islands', size : 'm', 'has-clear' : true, disabled : true }
                }
            ],
            cls : 'islands-label-disabled'
        },
        [
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm', type : 'textarea', 'has-clear' : true },
                val : 'value',
                cls : 'islands-textarea-val-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'l', type : 'textarea', 'has-clear' : true },
                placeholder : 'placeholder',
                cls : 'islands-textarea-placeholder-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm', type : 'textarea', 'has-clear' : true, disabled : true },
                val : 'value',
                cls : 'islands-textarea-val-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'islands', size : 'l', type : 'textarea', 'has-clear' : true, disabled : true },
                placeholder : 'placeholder',
                cls : 'islands-textarea-placeholder-disabled'
            }
        ].map(function(block) {
            return {
                block : 'test',
                content : block
            };
        }),
        {
            block : 'input',
            mods : { theme : 'islands', size : 'm', 'has-clear' : true },
            val : 'some val',
            cls : 'islands-clear-enabled'
        }
    ]
});
