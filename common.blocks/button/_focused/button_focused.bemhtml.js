block('button').mod('focused', true).js()(function() {
    return this.extend(applyNext(), { lazyInit : false });
});
