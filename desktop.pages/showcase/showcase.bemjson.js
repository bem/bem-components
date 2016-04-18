/* global module */

var addLinkToDoc = function(blockName, hash, text) {
    return [
        {
            block : 'link',
            mods : { theme : 'islands', size : 'l', type : 'docs' },
            url : 'https://github.com/bem/bem-components/blob/v3/common.blocks/' +
                blockName + '/' + blockName + '.ru.md' + (hash? hash : ''),
            content : text || blockName
        },
        { tag : 'br'}
    ];
};

module.exports = {
    block : 'page',
    title : 'Showcase',
    mods : { theme : 'islands' },
    head : [
        {
            elem : 'conditional-comment',
            condition : '> IE 8',
            msieOnly : false,
            content : { elem : 'css', url : 'showcase.css' }
        },
        {
            elem : 'conditional-comment',
            condition : '<= IE 8',
            content : { elem : 'css', url : 'showcase.ie.css' }
        }
    ],
    scripts : [{ elem : 'js', url : 'showcase.js' }],
    content : [
        {
            block : 'layout',
            content : [
                {
                    elem : 'cell',
                    content : [
                        addLinkToDoc('button', '#Модификатор-view'),
                        {
                            block : 'button',
                            mods : { theme : 'islands', size : 's' },
                            text : 'size S'
                        }
                    ]
                },
                {
                    elem : 'cell',
                    content : [
                        addLinkToDoc('checkbox-group'),
                        {
                            block : 'checkbox-group',
                            name : 'islands',
                            mods : { theme : 'islands', size : 'l' },
                            val : [ 2, 4 ],
                            options : [
                                { val : 1, text : 'Small' },
                                { val : 2, text : 'Normal' },
                                { val : 3, text : 'Big', disabled : true },
                                { val : 4, text : 'Beautiful', disabled : true }
                            ]
                        }
                    ]
                },
                {
                    elem : 'cell',
                    content : [
                        addLinkToDoc('input'),
                        {
                            block : 'input',
                            mods : { theme: 'islands', 'has-clear' : true, size : 'l', type : 'search' },
                            val : 'Find images',
                            placeholder : 'type a question'
                        },
                        '<br><br>',
                        addLinkToDoc('menu'),
                        {
                            block : 'menu',
                            mods : { mode : 'radio', theme : 'islands', size : 'l', custom : true },
                            val : 3,
                            content : [
                                {
                                    block : 'menu-item',
                                    val : 1,
                                    content : 'Show on the site'
                                },
                                {
                                    block : 'menu-item',
                                    val : 2,
                                    content : 'Cached version'
                                },
                                {
                                    block : 'menu-item',
                                    val : 3,
                                    content : 'Search in your pocket'
                                }
                            ]
                        }
                    ]
                },
                {
                    elem : 'cell',
                    content : [
                        addLinkToDoc('select', '#mode', 'select_mode_check'),
                        {
                            block : 'select',
                            mods : { mode : 'check', theme : 'islands', size : 'l' },
                            name : 'select',
                            text : 'Language',
                            options : [
                                { val : 1, text : 'Русский' },
                                { val : 2, text : 'English' },
                                { val : 3, text : 'Deutsch' },
                                { val : 4, text : 'Português' },
                                { val : 5, text : '中國' }
                            ]
                        }
                    ]
                },
                {
                    elem : 'cell',
                    content : [
                        addLinkToDoc('button', '#Модификатор-view', 'button_view_action'),
                        {
                            block : 'button',
                            mods : { theme : 'islands', size : 'm', view : 'action' },
                            text : 'Action'
                        }
                    ]
                },
                {
                    elem : 'cell',
                    content : [
                        addLinkToDoc('radio-group'),
                        {
                            block : 'radio-group',
                            name : 'islands-radios-1',
                            mods : { theme : 'islands', size : 'l' },
                            val : 2,
                            options : [
                                { val : 1, text : 'Radio is off' },
                                { val : 2, text : 'Radio is on' }
                            ]
                        },
                        { tag : 'br' },
                        {
                            block : 'radio-group',
                            name : 'islands-radios',
                            mods : { theme : 'islands', size : 'l' },
                            val : 2,
                            options : [
                                { val : 1, text : 'No, you can\'t', disabled : true },
                                { val : 2, text : 'You have no choice', disabled : true }
                            ]
                        }
                    ]
                },
                {
                    elem : 'cell',
                    content : [
                        addLinkToDoc('radio-group', '#type', 'radio-group_type_button'),
                        {
                            block : 'radio-group',
                            name : 'islands-button',
                            mods : { theme : 'islands', size : 'l', type : 'button' },
                            val : 2,
                            options : [
                                { val : 1, text : 'Black & white' },
                                { val : 2, text : 'Colored' },
                                { val : 3, text : 'Any colors' }
                            ]
                        },
                        { tag: 'br' },
                        addLinkToDoc('spin'),
                        {
                            block : 'spin-container',
                            content : ['s', 'm', 'l', 'xl'].map(function(size) {
                                return {
                                    block : 'spin',
                                    mods : { theme : 'islands', size : size, visible : true }
                                };
                            })
                        }
                    ]
                },
                {
                    elem : 'cell',
                    content : [
                        addLinkToDoc('select', '#mode', 'select_mode_radio-check'),
                        {
                            block : 'select',
                            mods : { mode : 'radio-check', theme : 'islands', size : 'l' },
                            name : 'select-radio',
                            text : 'Your mood',
                            options : [
                                { val : 1, text : 'Bad' },
                                { val : 2, text : 'Normal' },
                                { val : 3, text : 'Great!' }
                            ]
                        }
                    ]
                },
                {
                    elem : 'cell',
                    content : [
                        addLinkToDoc('button', '#buttontoggle', 'button_togglable_check'),
                        {
                            block : 'button',
                            mods : { theme : 'islands', size : 'l', togglable : 'check' },
                            text : 'Togglable'
                        }
                    ]

                },
                {
                    elem : 'cell',
                    content : [
                        addLinkToDoc('attach'),
                        {
                            block : 'attach',
                            mods : { theme : 'islands', size : 'l' },
                            button : {
                                block : 'button',
                                mods : { theme : 'islands', size : 'l' },
                                icon : { block : 'icon', mods : { action : 'download' } },
                                text : 'Load image'
                            },
                            noFileText : 'file is not selected'
                        },
                        {
                            block: 'progressbar-example',
                            js: true,
                            content: [{
                                block : 'button',
                                mods : {
                                    theme : 'islands',
                                    size : 's',
                                    togglable : 'check',
                                    checked : true
                                },
                                text : 'Pause'
                            },
                            addLinkToDoc('progressbar'),
                            {
                                block : 'progressbar',
                                mods : { theme : 'islands' },
                                val : 95
                            }]
                        }
                    ]
                },
                {
                    elem : 'cell',
                    content : [
                        addLinkToDoc('textarea'),
                        {
                            block : 'textarea',
                            mods : { theme : 'islands', size : 'l' },
                            val : 'Write a review',
                            placeholder : 'nothing to say'
                        }
                    ]
                },
                {
                    elem : 'cell',
                    content : {
                        block : 'test',
                        js : true,
                        content : [
                            addLinkToDoc('modal'),
                            {
                                block : 'link',
                                mods : { theme : 'islands', size : 'l', pseudo : true, 'show-modal' : true },
                                content : 'Open your mind'
                            },
                            {
                                block : 'modal',
                                mods : { theme : 'islands', autoclosable : true },
                                content : [
                                    {
                                        block : 'text',
                                        content : 'Your mind was opened!'
                                    },
                                    '(Click outside the box to close)'
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    ]
}
