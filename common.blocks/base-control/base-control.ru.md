# base-control

Вспомогательный блок. Используется для работы большинства блоков библиотеки [bem-components](https://github.com/bem/bem-components):

* [attach](https://github.com/bem/bem-components/blob/v2/common.blocks/attach/attach.ru.md)
* [button](https://github.com/bem/bem-components/blob/v2/common.blocks/button/button.ru.md)
* [checkbox](https://github.com/bem/bem-components/blob/v2/common.blocks/checkbox/checkbox.ru.title.txt)
* [input](https://github.com/bem/bem-components/blob/v2/common.blocks/input/input.ru.md)
* [link](https://github.com/bem/bem-components/blob/v2/common.blocks/link/link.ru.md)
* [menu](https://github.com/bem/bem-components/tree/v2/common.blocks/menu/menu.ru.md)
* [radio](https://github.com/bem/bem-components/tree/v2/common.blocks/radio/radio.ru.md)

Предназначен для реализации общей функциональности данных блоков, предоставляющей состояния `focused` и `disabled`.
Следит за значением атрибута `tabIndex` в зависимости от текущего состояния блока.

Блок использует следующие методы:


<table>
    <tr>
        <th>Метод</td>
        <th>Описание</td>
    </tr>
    <tr>
        <td><code>getName</code></td>
        <td>Возвращает имя контрола при его наличии. В обратном случае должен вернуть пустую строку.</td>
    </tr>
    <tr>
        <td><code>getVal</code></td>
        <td>Возвращает значение контрола.</td>
    </tr>
</table>
