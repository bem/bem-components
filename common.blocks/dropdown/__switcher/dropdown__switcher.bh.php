<?php
return function ($bh) {
    $bh->match('dropdown__switcher', function($ctx) {
        $ctx->tag(false);
    });
};
