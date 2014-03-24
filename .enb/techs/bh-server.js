module.exports = require('bh/techs/bh-server').buildFlow()
    .defineOption('jsAttrName', 'data-bem')
    .defineOption('jsAttrScheme', 'json')
    .createTech();
