# control

Вспомогательный блок. Используется для работы большинства блоков библиотеки [bem-components](https://github.com/bem/bem-components):

* [attach](../attach/attach.ru.md)
* [button](../button/button.ru.md)
* [checkbox](../checkbox/checkbox.ru.md)
* [input](../input/input.ru.md)
* [link](../link/link.ru.md)
* [menu](../menu/menu.ru.md)
* [radio](../radio/radio.ru.md)

Предоставляет реализацию состояний `focused` и `disabled` на уровне `common.blocks`, а также состояния `hovered` на уровне `desktop.blocks`.
Следит за значением атрибута `tabIndex` в зависимости от текущего состояния блока.

Блок предоставляет следующие методы:

<table>
    <tr>
        <th>Метод</td>
        <th>Описание</td>
    </tr>
    <tr>
        <td><code>getVal</code></td>
        <td>Возвращает значение контрола.</td>
    </tr>
    <tr>
        <td><code>getName</code></td>
        <td>Возвращает имя контрола при его наличии. В обратном случае должен вернуть пустую строку.</td>
    </tr>
</table>
