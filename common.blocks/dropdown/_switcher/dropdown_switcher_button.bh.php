<?php
return function ($bh) {

    $bh->match('dropdown_switcher_button__switcher', function($ctx, $json) {
        $content = $ctx->content();
        if ($ctx->isArray($content)) return $content;

        $res = $ctx->isSimple($content)?
            [ 'block' => 'button', 'text' => $content ] :
            $content;
        $res = $ctx->phpize($res);

        if ($res->block === 'button') {
            $resMods = $res->mods;
            $dropdownMods = $json->blockMods;
            $resMods->size || ($resMods->size = $dropdownMods->size);
            $resMods->theme || ($resMods->theme = $dropdownMods->theme);
            $resMods->disabled = $dropdownMods->disabled;
        }

        return $res;
    });

};
