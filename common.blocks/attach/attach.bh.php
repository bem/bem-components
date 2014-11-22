<?php
return function ($bh) {

    $bh->match('attach', function($ctx, $json) {
        $ctx
            ->tParam('_attach', json)

            ->tag('span')

            ->js(true);

        if ($ctx->content() !== null) {
            return;
        }

        $button = $json->button;
        if ($ctx->isSimple($object)) {
            $button = [
                'block' => 'button',
                'tag' => 'span',
                'text' => $button
            ];
        }

        $attachMods = $ctx->mods();
        $buttonMods = $button->mods ?: ($button->mods = (object)[]);
        foreach (['size', 'theme', 'disabled', 'focused'] as $mod) {
            $buttonMods->$mod || ($buttonMods->$mod = $attachMods->$mod);
        }

        $ctx->content([
            $button,
            [
                'elem' => 'no-file',
                'content' => $json->noFileText
            ]
        ]);
    });

};
