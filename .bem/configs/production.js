process.env.YENV = 'production';

module.exports = {

    libraries : {

        'bem-bl' : {
            type        : 'git',
            url         : 'git://github.com/bem/bem-bl.git',
            treeish     : '0.3'
        },
        'bem-html' : {
            type        : 'git',
            url         : 'git://github.com/bem/bemhtml.git'
        }

    }

};
