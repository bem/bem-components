module.exports = {
    'bem-core' : {
        path : 'libs/bem-core',
        levels : {
            desktop : ['libs/bem-core/common.blocks', 'libs/bem-core/desktop.blocks'],
            touch : ['libs/bem-core/common.blocks', 'libs/bem-core/touch.blocks'],
            'touch-pad' : ['libs/bem-core/common.blocks', 'libs/bem-core/touch.blocks'],
            'touch-phone' : ['libs/bem-core/common.blocks', 'libs/bem-core/touch.blocks']
        }
    },
    'bem-pr' : {
        path : 'libs/bem-pr',
        levels : {
            spec : ['libs/bem-pr/spec.blocks']
        }
    },
    'design' : {
        path : 'design',
        levels : {
            desktop : ['design/common.blocks', 'design/desktop.blocks'],
            touch : ['design/common.blocks', 'design/touch.blocks'],
            'touch-pad' : ['design/common.blocks', 'design/touch.blocks', 'design/touch-pad.blocks'],
            'touch-phone' : ['design/common.blocks', 'design/touch.blocks', 'design/touch-phone.blocks']
        }
    }
};
