/**
 * XXX: UNDER DEVELOPMENT
 *
 * Репозиторий библиотек
 *
 * Структура
 *
 *   { id : { lib-description }, ... }
 *
 * Описание
 * - библиотеки устанавливаются в `LIB_ROOT/id` (.bem/environ.js)
 * - реквизиты библиотеки (type, url, ...) могут быть переопределены
 *   в конфиге окружения, .bem/configs/current
 */

module.exports = {

    'bem-bl' : {
        type     : 'git',
        url      : 'git://github.com/bem/bem-bl.git',
        treeish  : '0.3'
    },
    'bem-controls' : {
        type     : 'git',
        url      : 'git://github.com/bem/bem-controls.git'
    },
    'bem-core' : {
        type     : 'git',
        url      : 'git://github.com/bem/bem-core.git'
    },
    'bem-gen-doc' : {
        type     : 'git',
        url      : 'git://github.com/bem/bem-gen-doc.git',
        treeish  : 'make'
    },
    'bem-json' : {
        type     : 'git',
        url      : 'git://github.com/delfrrr/bem-json.git'
    },
    'bem-pr' : {
        type     : 'git',
        url      : 'git://github.com/narqo/bem-pr.git'
    },
    'bem-yana' : {
        type     : 'git',
        url      : 'git://github.com/narqo/bem-yana.git'
    }

};
