<?php
return function ($bh) {
    $bh->match('link_pseudo', function($ctx, $json) {
        $json->url || $ctx->tag('span');
    });
};
