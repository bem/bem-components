<?php
return function ($bh) {
    $bh->match('attach__clear', function($ctx) {
        $ctx->tag('i');
    });
};
