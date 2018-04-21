module.exports = {
    root : true,

    levels : [
        {
            layer : 'common',
            scheme : 'nested'
        },
        {
            layer : 'desktop',
            scheme : 'nested'
        },
        {
            layer : 'touch',
            scheme : 'nested'
        },
        {
            layer : 'design-common',
            path : 'design/common.blocks',
            scheme : 'nested'
        },
        {
            layer : 'design-desktop',
            path : 'design/desktop.blocks',
            scheme : 'nested'
        }
    ],

    sets : {
        desktop : 'common desktop',
        touch : 'common touch',
        'design-desktop' : 'common desktop design-common design-desktop',
        'design-touch' : 'common touch design-common design-touch'
    }
};
