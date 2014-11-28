<?php
return function ($bh) {

    $bh->match('menu-item_type_link', function($ctx) {
        $ctx->mod('disabled') && $ctx->tParam('_menuItemDisabled', true);
    });

    $bh->match('link', function($ctx) {
        $ctx->tParam('_menuItemDisabled') && $ctx->mod('disabled', true);
    });

};
