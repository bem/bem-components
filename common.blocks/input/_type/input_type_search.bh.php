<?php
return function ($bh) {
    $bh->match('input_type_search__control', function($ctx) {
        $ctx->attr('type', 'search');
    });
};
