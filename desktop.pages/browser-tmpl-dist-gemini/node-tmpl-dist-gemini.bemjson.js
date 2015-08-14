/* global module */
module.exports = {
    block : 'page',
    title : 'Dist',
    mods : { theme : 'islands' },
    head : [{ elem : 'css', url : '../../dist/desktop/desktop.css' }],
    scripts : [{ elem : 'js', url : '../../dist/desktop/desktop.browser.js' }],
    content : [
        [
            {
                block : 'button',
                mods : { theme : 'islands', size : 's' },
                text : 'normal (size S)'
            },
            {
                block : 'button',
                mods : { theme : 'islands', size : 's', disabled : true },
                text : 'disabled'
            }
        ],

        [
            {
                block : 'attach',
                mods : { theme : 'islands', size : 's' },
                button : 'Load (size S)',
                noFileText : 'file is not selected'
            }
        ],

        [
            {
                block : 'checkbox-group',
                name : 'islands',
                mods : { theme : 'islands', size : 'l', type : 'line' },
                val : [ 2, 4 ],
                options : [
                    { val : 1, text : 'Small' },
                    { val : 2, text : 'Normal' },
                    { val : 3, text : 'Big', disabled : true }
                ]
            },
            {
                block : 'radio-group',
                name : 'islands-radios-1',
                mods : { theme : 'islands', size : 'l', type : 'line' },
                val : 2,
                options : [
                    { val : 1, text : 'Radio is off' },
                    { val : 2, text : 'Radio is on' }
                ]
            }
        ],

        [
            {
                block : 'checkbox-group',
                name : 'islands-button1',
                mods : { theme : 'islands', size : 'm', type : 'button' },
                val : [2, 4],
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second' }
                ]
            },
            {
                block : 'radio-group',
                name : 'islands-button1',
                mods : { theme : 'islands', size : 'm', type : 'button' },
                val : 2,
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second', disabled : true }
                ]
            }
        ],

        [
            {
                block : 'input',
                mods : { theme : 'islands', size : 'm' },
                val : 'islands'
            },
            {
                block : 'input',
                mods : { theme : 'islands', 'has-clear' : true, size : 'm' },
                val : 'has-clear',
                placeholder : 'placeholder'
            },
            {
                block : 'input',
                mods : { theme : 'islands', 'has-clear' : true, size : 'l', type : 'password' },
                val : 'password',
                placeholder : 'password'
            }
        ],

        [
            { tag : 'br' },
            {
                block : 'menu',
                mods : { theme : 'islands', size : 'm', mode : 'check' },
                content : [
                    {
                        elem : 'group',
                        title : 'Group 1',
                        content : [
                            {
                                block : 'menu-item',
                                mods : { checked : true },
                                content : 'item 1'
                            },
                            {
                                block : 'menu-item',
                                content : 'item 2'
                            }
                        ]
                    },
                    {
                        elem : 'group',
                        title : 'Group 2',
                        content : [
                            {
                                block : 'menu-item',
                                mods : { disabled : true },
                                content : 'item 3'
                            },
                            {
                                block : 'menu-item',
                                mods : { disabled : true, checked : true },
                                content : 'item 4'
                            }
                        ]
                    }
                ]
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm' },
                val : 'textarea',
                placeholder : 'placeholder'
            },
            {
                block : 'textarea',
                mods : { theme : 'islands', size : 'm', disabled : true },
                placeholder : 'disabled'
            }
        ],

        {
            block : 'progressbar',
            mods : { theme : 'islands' },
            val : 25
        },

        ['s', 'm', 'l', 'xl'].map(function(size) {
            return {
                block : 'spin',
                attrs : { style : '-webkit-animation-play-state: paused; animation-play-state: paused;'},
                mods : { theme : 'islands', size : size, visible : true }
            };
        }),

        [
            {
                block : 'select',
                mods : { mode : 'check', theme : 'islands', size : 'm' },
                text : 'empty',
                val : [2, 5],
                options : [
                    {
                        title : 'title of group 1',
                        group : [
                            { val : 1, text : 'first' },
                            { val : 2, text : 'second' }
                        ]
                    },
                    {
                        group : [
                            { val : 4, text : 'fourth' },
                            { val : 6, text : 'sixth', disabled : true }
                        ]
                    }
                ]
            },
            {
                block : 'select',
                mods : { mode : 'radio', theme : 'islands', size : 'm' },
                name : 'select1',
                optionsMaxHeight : 100,
                val : 2,
                options : [
                    { val : 1, text : 'first' },
                    { val : 2, text : 'second' },
                    { val : 3, text : 'third' }
                ]
            },
            {
                block : 'select',
                mods : { mode : 'radio-check', theme : 'islands', size : 'm' },
                name : 'select2',
                text : '—',
                options : [
                    {
                        val : 1,
                        text : 'Twitter',
                        checkedText : 'tw',
                        icon : { block : 'icon', mods : { social : 'twitter' } }
                    },
                    {
                        val : 2,
                        text : 'VKontakte',
                        checkedText : 'vk',
                        icon : { block : 'icon', mods : { social : 'vk' } }
                    }
                ]
            }
        ]
    ]
};
