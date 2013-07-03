var PATH = require('path'),
    environ = require('../environ');

// путь до базовой технологии
exports.baseTechPath = environ.getLibPath('bem-pr', 'bem/techs/examples.js');

// пеопределяем метод `getBaseLevel`, указываем, что в качестве уровня
// для собранных примеров нужно использовать уровень бандлов
exports.getBaseLevel = function() {
    return PATH.resolve(__dirname, '../levels/bundles.js');
};
