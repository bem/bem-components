<?php
return function ($bh) {
    $bh->match('menu_focused', function($ctx) {
        $js = $ctx->extend($ctx->js() ?: [], [ 'live' => false ]);
        $ctx->js($js);
    });
};
