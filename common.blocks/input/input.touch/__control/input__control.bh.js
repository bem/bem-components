module.exports = function(bh) {
    bh.match('input__control', function(ctx) {
        ctx
            .applyBase()
            .attrs({
                autocomplete : 'off',
                autocorrect : 'off',
                autocapitalize : 'off',
                spellcheck : 'false'
            });
    });
};
