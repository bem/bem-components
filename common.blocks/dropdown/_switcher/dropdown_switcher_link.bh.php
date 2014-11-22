<?php
return function ($bh) {

    $bh->match('dropdown_switcher_link__switcher', function($ctx, $json) {
        $content = $ctx->content();
        if (is_array($content)) return $content;

        $res = $ctx->isSimple($content)?
            (object)[ 'block' => 'link', 'mods' => [ 'pseudo' => true ], 'content' => $content ] :
            $content;

        if ($res->block === 'link') {
            $resMods = $res->mods ?: ($res->mods = (object)[]);
            $dropdownMods = $json->blockMods;
            $resMods->theme || ($resMods->theme = $dropdownMods->theme);
            $resMods->disabled = $dropdownMods->disabled;
        }

        return $res;
    });

};
