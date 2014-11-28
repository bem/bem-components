<?php
return function ($bh) {

    $bh->match('radio-group_mode_radio-check', function($ctx) {
        if($ctx->mod('type') !== 'button')
            throw new Exception('Modifier mode=radio-check can be only with modifier type=button');
    });

};
