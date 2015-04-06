# Migration

## 2.1.0

The `width` modifier could be used independent of the theme `islands` in the `input`, `select` and `textarea` blocks. Add this modifier to the dependencies to generate BEMJSON dynamically:

```
({
    shouldDeps : { block : 'input', mods : { width : 'available' } }
})
```
