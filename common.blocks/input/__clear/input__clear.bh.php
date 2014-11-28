<?php
return function ($bh) {
    $bh->match('input__clear', function($ctx) {
        $ctx->tag('i');
    });
};
