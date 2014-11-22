<?php
return function ($bh) {
    $bh->match('menu-item', function($ctx, $json) {
        $menuMods = $ctx->tParam('menuMods');

        $menuMods && $ctx->mods([
            'theme' => $menuMods->theme,
            'disabled' => $menuMods->disabled
        ]);

        $ctx
            ->js([ 'val' => $json->val ])
            ->attr('role', 'menuitem');
    });
};
