<?php
return function ($bh) {
    $bh->match('attach__no-file', function($ctx) {
        $ctx->tag('span');
    });
};
