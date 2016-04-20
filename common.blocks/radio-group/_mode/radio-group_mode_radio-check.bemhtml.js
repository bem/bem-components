block('radio-group').mod('mode', 'radio-check')(
    def()(function() {
        if(this.mods.type !== 'button')
            throw Error('Modifier mode=radio-check can be only with modifier type=button');

        return applyNext();
    })
);
