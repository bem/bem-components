var myPath = require('bem/lib/path'),
    Template = require('bem/lib/template');

exports.techModule = module;

exports.newFileContent = function (vars) {

    return Template.process([
        "({",
        "    block: 'b-page',",
        "    title: '{{bemBlockName}}',",
        "    head: [",
        "        { elem: 'css', url: '_{{bemBlockName}}.css', ie: false},",
        "        { elem: 'css', url: '_{{bemBlockName}}', ie: true },",
        "        { block: 'i-jquery', elem: 'core'},",
        "        { elem: 'js', url:'_{{bemBlockName}}.js'},",
        "    ],",
        "    content: [",
        "        'block content'",
        "    ]",
        "})"], vars);
};
