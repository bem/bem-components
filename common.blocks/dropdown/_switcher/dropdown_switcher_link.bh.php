<?php
return function ($bh) {

    $bh->match('dropdown_switcher_link__switcher', function($ctx, $json) {
        $content = $ctx->content();
        if ($ctx->isArray($content)) return $content;

        $res = $ctx->isSimple($content)?
            [ 'block' => 'link', 'mods' => [ 'pseudo' => true ], 'content' => $content ] :
            $content;
        $res = $ctx->phpize($res);

        if ($res->block === 'link') {
            $resMods = $res->mods;
            $dropdownMods = $json->blockMods;
            $resMods->theme || ($resMods->theme = $dropdownMods->theme);
            $resMods->disabled = $dropdownMods->disabled;
        }

        return $res;
    });

};
