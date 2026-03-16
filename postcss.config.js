import postcssImport from 'postcss-import';
import postcssEach from 'postcss-each';
import postcssFor from 'postcss-for';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssCalc from 'postcss-calc';
import postcssNested from 'postcss-nested';
import rebemCss from 'rebem-css';
import postcssUrl from 'postcss-url';
import autoprefixer from 'autoprefixer';
import postcssReporter from 'postcss-reporter';

export default {
    plugins: [
        postcssImport(),
        postcssEach,
        postcssFor,
        postcssSimpleVars({ unknown: () => {} }),
        postcssCalc(),
        postcssNested,
        rebemCss,
        postcssUrl({ url: 'rebase' }),
        autoprefixer,
        postcssReporter(),
    ],
};
