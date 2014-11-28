<?php
return function ($bh) {
    $bh->match('radio__box', function($ctx) {
        $ctx->tag('span');
    });
};
