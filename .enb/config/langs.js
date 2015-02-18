var langs = process.env.BEM_I18N_LANGS,
    DEFAULT_LANGS = ['ru', 'en'];

module.exports = langs? langs.split(' ') : [].concat(DEFAULT_LANGS);
