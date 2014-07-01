({
    block : 'page',
    title : 'bem-components: input',
    mods : { theme : 'normal' },
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

        { tag : 'h2', content : 'normal' },
        [
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm' },
                cls : 'normal-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm', disabled : true },
                cls : 'normal-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm' },
                val : 'default',
                cls : 'normal-val-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm' },
                placeholder : 'placeholder',
                cls : 'normal-placeholder-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm', 'has-clear' : true, disabled : true },
                val : 'value',
                cls : 'normal-val-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm', 'has-clear' : true, disabled : true },
                placeholder : 'placeholder',
                cls : 'normal-placeholder-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm', 'has-clear' : true },
                val : 'LongValLongValLongValLongValLongValLongVal',
                cls : 'normal-longVal-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm', 'has-clear' : true },
                placeholder : 'LongPlaceholderLongPlaceholderLongPlaceholder',
                cls : 'normal-longPlaceholder-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm', 'has-clear' : true, disabled : true },
                val : 'LongValLongValLongValLongValLongValLongVal',
                cls : 'normal-longVal-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm', 'has-clear' : true, disabled : true },
                placeholder : 'LongPlaceholderLongPlaceholderLongPlaceholder',
                cls : 'normal-longPlaceholder-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 's' },
                val : 'size s',
                cls : 'normal-sizeS-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm' },
                val : 'size m',
                cls : 'normal-sizeM-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'l' },
                val : 'size l',
                cls : 'normal-sizeL-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'xl' },
                val : 'size xl',
                cls : 'normal-sizeXL-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 's', disabled : true },
                val : 'size s',
                cls : 'normal-sizeS-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm', disabled : true },
                val : 'size m',
                cls : 'normal-sizeM-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'l', disabled : true },
                val : 'size l',
                cls : 'normal-sizeL-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'xl', disabled : true },
                val : 'size xl',
                cls : 'normal-sizeXL-disabled'
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
                    mods : { theme : 'normal', size : 'm', 'has-clear' : true },
                    placeholder : 'placeholder',
                    val : 'some value'
                }
            ],
            attrs : { style : 'margin-bottom: 10px;' },
            cls : 'normal-label-enabled'
        },
        {
            block : 'test',
            content : [
                { tag : 'label', content : 'label' },
                ': ',
                {
                    block : 'input',
                    mods : { theme : 'normal', size : 'm', 'has-clear' : true, disabled : true }
                }
            ],
            cls : 'normal-label-disabled'
        },
        [
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm', type : 'textarea', 'has-clear' : true },
                val : 'value',
                cls : 'normal-textarea-val-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm', type : 'textarea', 'has-clear' : true },
                placeholder : 'placeholder',
                cls : 'normal-textarea-placeholder-enabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm', type : 'textarea', 'has-clear' : true, disabled : true },
                val : 'value',
                cls : 'normal-textarea-val-disabled'
            },
            {
                block : 'input',
                mods : { theme : 'normal', size : 'm', type : 'textarea', 'has-clear' : true, disabled : true },
                placeholder : 'placeholder',
                cls : 'normal-textarea-placeholder-disabled'
            }
        ].map(function(block) {
            return {
                block : 'test',
                content : block
            };
        }),
        {
            block : 'input',
            mods : { theme : 'normal', size : 'm', 'has-clear' : true },
            val : 'some val',
            cls : 'normal-clear-enabled'
        }
    ]
});
