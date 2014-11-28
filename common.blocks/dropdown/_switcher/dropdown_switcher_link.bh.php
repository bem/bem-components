<?php
return function ($bh) {

    $bh->match('dropdown_switcher_link__switcher', function($ctx, $json) {
        $content = $ctx->content();
        // if (Array.isArray(content)) return content
        if ($ctx->isArray($content)) { // php!yolo. bug?
            if (count($content) > 1) return $content;
            $content = $content[0];
        }

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
