<?php
return function ($bh) {
    $bh->match('menu-item', function($ctx, $json) {
        $menuMods = (array)$ctx->tParam('menuMods');

        empty($menuMods) || $ctx->mods([
            'theme' => @$menuMods['theme'],
            'disabled' => @$menuMods['disabled']
        ]);

        $ctx
            ->js([ 'val' => $json->val ])
            ->attr('role', 'menuitem');
    });
};
