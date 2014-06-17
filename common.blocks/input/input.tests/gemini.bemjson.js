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
        { tag : 'p', content : {
            block : 'input',
            cls : 'default-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { disabled : true },
            cls : 'default-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            val : 'default',
            cls : 'default-val-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            placeholder : 'placeholder',
            cls : 'default-placeholder-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { 'has-clear' : true, disabled : true },
            val : 'value',
            cls : 'default-val-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { 'has-clear' : true, disabled : true },
            placeholder : 'placeholder',
            cls : 'default-placeholder-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { 'has-clear' : true },
            val : 'LongValLongValLongValLongValLongValLongVal',
            cls : 'default-longVal-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { 'has-clear' : true },
            placeholder : 'LongPlaceholderLongPlaceholderLongPlaceholder',
            cls : 'default-longPlaceholder-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { 'has-clear' : true, disabled : true },
            val : 'LongValLongValLongValLongValLongValLongVal',
            cls : 'default-longVal-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { 'has-clear' : true, disabled : true },
            placeholder : 'LongPlaceholderLongPlaceholderLongPlaceholder',
            cls : 'default-longPlaceholder-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { 'has-clear' : true, 'has-label' : true },
            label : 'label',
            placeholder : 'placeholder',
            cls : 'default-label-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { 'has-clear' : true, 'has-label' : true, disabled : true },
            label : 'label',
            cls : 'default-label-disabled'
        } },
        { tag : 'div', attrs : { style : 'display: inline-block;' },content : {
            block : 'input',
            mods : { type : 'textarea', 'has-clear' : true },
            val : 'value',
            cls : 'default-textarea-val-enabled'
        } },
        { tag : 'br' },
        { tag : 'div', attrs : { style : 'display: inline-block;' },content : {
            block : 'input',
            mods : { type : 'textarea', 'has-clear' : true },
            placeholder : 'placeholder',
            cls : 'default-textarea-placeholder-enabled'
        } },
        { tag : 'br' },
        { tag : 'div', attrs : { style : 'display: inline-block;' },content : {
            block : 'input',
            mods : { type : 'textarea', 'has-clear' : true, disabled : true },
            val : 'value',
            cls : 'default-textarea-val-disabled'
        } },
        { tag : 'br' },
        { tag : 'div', attrs : { style : 'display: inline-block;' },content : {
            block : 'input',
            mods : { type : 'textarea', 'has-clear' : true, disabled : true },
            placeholder : 'placeholder',
            cls : 'default-textarea-placeholder-disabled'
        } },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm' },
            cls : 'normal-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm', disabled : true },
            cls : 'normal-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm' },
            val : 'default',
            cls : 'normal-val-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm' },
            placeholder : 'placeholder',
            cls : 'normal-placeholder-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm', 'has-clear' : true, disabled : true },
            val : 'value',
            cls : 'normal-val-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm', 'has-clear' : true, disabled : true },
            placeholder : 'placeholder',
            cls : 'normal-placeholder-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm','has-clear' : true },
            val : 'LongValLongValLongValLongValLongValLongVal',
            cls : 'normal-longVal-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm', 'has-clear' : true },
            placeholder : 'LongPlaceholderLongPlaceholderLongPlaceholder',
            cls : 'normal-longPlaceholder-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm','has-clear' : true, disabled : true },
            val : 'LongValLongValLongValLongValLongValLongVal',
            cls : 'normal-longVal-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm', 'has-clear' : true, disabled : true },
            placeholder : 'LongPlaceholderLongPlaceholderLongPlaceholder',
            cls : 'normal-longPlaceholder-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm', 'has-clear' : true, 'has-label' : true },
            label : 'label',
            placeholder : 'placeholder',
            cls : 'normal-label-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm', 'has-clear' : true, 'has-label' : true, disabled : true },
            label : 'label',
            cls : 'normal-label-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm', type : 'textarea', 'has-clear' : true },
            val : 'value',
            cls : 'normal-textarea-val-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm', type : 'textarea', 'has-clear' : true },
            placeholder : 'placeholder',
            cls : 'normal-textarea-placeholder-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm', type : 'textarea', 'has-clear' : true, disabled : true },
            val : 'value',
            cls : 'normal-textarea-val-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm', type : 'textarea', 'has-clear' : true, disabled : true },
            placeholder : 'placeholder',
            cls : 'normal-textarea-placeholder-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 's' },
            val : 'size s',
            cls : 'normal-sizeS-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm' },
            val : 'size m',
            cls : 'normal-sizeM-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'l' },
            val : 'size l',
            cls : 'normal-sizeL-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'xl' },
            val : 'size xl',
            cls : 'normal-sizeXL-enabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 's', disabled : true },
            val : 'size s',
            cls : 'normal-sizeS-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'm', disabled : true },
            val : 'size m',
            cls : 'normal-sizeM-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'l', disabled : true },
            val : 'size l',
            cls : 'normal-sizeL-disabled'
        } },
        { tag : 'p', content : {
            block : 'input',
            mods : { theme : 'normal', size : 'xl', disabled : true },
            val : 'size xl',
            cls : 'normal-sizeXL-disabled'
        } }
    ]
});
