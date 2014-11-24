<?php
return function ($bh) {

    $bh->match('dropdown', function($ctx, $json) {
        $ctx->js(true);

        $popup = $json->popup;
        if ($ctx->isSimple($popup) || @$popup['block'] !== 'popup') {
            $popup = [ 'block' => 'popup', 'content' => $popup ];
        }
        $json->popup = $popup = $ctx->phpize($popup);

        $popupMods = $popup->mods;
        $popupMods->theme || ($popupMods->theme = $ctx->mod('theme'));
        key_exists('autoclosable', $popupMods) || ($popupMods->autoclosable = true);

        $popupMods->target = 'anchor';

        $ctx->content([
           [ 'elem' => 'switcher', 'content' => $json->switcher ],
           $popup
        ], true);
    });

};
