/* jshint ignore:start */
var content = require('./node-tmpl-dist-gemini.bemjson.js').content;

/* predef module */
module.exports = {
    block : 'page',
    title : 'Dist',
    mods : { theme : 'islands' },
    head : [{ elem : 'css', url : '../../dist/desktop/bem-components.css' }],
    scripts : [
        { elem : 'js', url : '../../dist/desktop/bem-components.js+bemhtml.js' },
        { elem : 'js', url : '../../dist/desktop/bem-components.js+bh.js' },
        { elem : 'js', content : [
            'modules.require(["jquery", "BEMHTML", "BH"], function($, BEMHTML, BH) {',
            '   var json = ' + JSON.stringify(content) + ';',
            '   var bemhtmlResult = BEMHTML.apply(json);',
            '   var bhResult = BH.apply(json);',
            '   $(".page").append(bemhtmlResult, "<br/>", bhResult);',
            '});'
        ]}
    ],
    attrs : { style : 'width:1000px;padding:10px;' }
};
/* jshint ignore:end */
