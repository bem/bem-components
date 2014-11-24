<?php
return function ($bh) {

    $bh->match('attach__control', function($ctx) {
        $attrs = [ 'type' => 'file' ];
        $attach = $ctx->tParam('_attach');

        // в js генерим html для attach__control без самого attach
        if (!is_object($attach)) {
            $attrs['name'] = $attach->name;
            $attach->mods && $attach->mods->disabled && ($attrs->disabled = 'disabled');
            $attach->tabIndex && ($attrs['tabindex'] = $attach->tabIndex);
        }

        $ctx
            ->tag('input')
            ->attrs($attrs);

    });

};
