module.exports = function(bh) {
    bh.match('input__control', function(ctx) {
        // TODO: проверить, точно ли нужен autocomplete=off
        ctx.attrs({
            autocomplete : 'off',
            autocorrect : 'off',
            autocapitalize : 'off',
            spellcheck : 'false'
        });
    });
};
