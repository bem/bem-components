# spin

This block indicates the progress of some process (e.g. site page or some media file loading).

Rotation of the **spin** block is implemented by CSS3 animation.

## Block Modifiers

The **spin** block requieres the block modifiers listed below:

## __theme


### simple

````
    {
        block : 'spin',
        mods : { theme : 'simple', size : 's', progress : true }
    }
````

### nornal

The theme **normal** is developed for Yandex.

````       
    {
        block : 'spin',
        mods : { theme : 'normal', size : 's', progress : true }
    }
````

## __size

`{ size : 's' }`

There are five sizes available: **xs**, **s**, **m**, **l**, **xl**.

<table>
  <tr>
    <th>Theme/Size</th>
    <th>simple</th>
    <th>normal</th>
  </tr>
  <tr>
    <td>xs</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 'xs', progress : true }
    }
</td>
    <td>       
    {
        block : 'spin',
        mods : { theme : 'normal', size : 'xs', progress : true }
    }
</td>
  </tr>
  <tr>
    <td>s</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 's', progress : true }
    }
    </td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'normal', size : 's', progress : true }
    }
    </td>
  </tr>
  <tr>
    <td>m</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 'm', progress : true }
    }
    </td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'normal', size : 'm', progress : true }
    }
    </td>
  </tr>
  <tr>
    <td>l</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 'l', progress : true }
    }
    </td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'normal', size : 'l', progress : true }
    }
    </td>
  </tr>
  <tr>
    <td>xl</td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'simple', size : 'xl', progress : true }
    }
    </td>
    <td>
    {
        block : 'spin',
        mods : { theme : 'normal', size : 'xl', progress : true }
    }
    </td>
  </tr>

</table>

## __progress

The `{ progress : true }` modifier activates the spin. The **spin** block rotates in visible state.

The `{ progress : false }` modifies paused rotation process. The `false` value is used when a **spin** block is invisible.