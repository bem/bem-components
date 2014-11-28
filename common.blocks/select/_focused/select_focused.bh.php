<?php
return function ($bh) {

    $bh->match('select_focused', function($ctx) {
    	$ctx
    		->applyBase()
    		->js($ctx->extend($ctx->js(), [ 'live' => false ]));
    });

};
