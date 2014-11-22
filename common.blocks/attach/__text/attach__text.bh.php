<?php
return function ($bh) {
    $bh->match('attach__text', function($ctx) {
        $ctx->tag('span');
    });
};
