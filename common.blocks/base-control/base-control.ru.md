# base-control

Вспомогательный блок. Используется в работе большинства блоков библиотеки [bem-components](https://github.com/bem/bem-components): [attach](https://github.com/bem/bem-components/blob/v2/common.blocks/attach/attach.ru.md), [button](https://github.com/bem/bem-components/blob/v2/common.blocks/button/button.ru.md), [checkbox](https://github.com/bem/bem-components/blob/v2/common.blocks/checkbox/checkbox.ru.title.txt), [input](https://github.com/bem/bem-components/blob/v2/common.blocks/input/input.ru.md), [link](https://github.com/bem/bem-components/blob/v2/common.blocks/link/link.ru.md), [menu](https://github.com/bem/bem-components/tree/v2/common.blocks/menu/menu.ru.md), [radio](https://github.com/bem/bem-components/tree/v2/common.blocks/radio/radio.ru.md). Предназначен для реализации общей функциональности данных блоков, предоставляющей состояния `focused` и `disabled`.

Использует следующие методы:

<div class="table-container">
    <table>
        <tr>
            <th align="center">Метод</td>
            <th align="center">Описание</td>
        </tr>
        <tr>
            <td>`beforesetMod`</td>
            <td>Сообщает блоку его действие до установки модификатора. Производит проверку активности блока: если блок неактивен (`disabled`), то он не может получить модификатор `focused`.</td>
        </tr>
        <tr>
            <td>`setMod`</td>
            <td>Устанавливает блоку соответствующий модификатор (`disabled`или `focused`).</td>
        </tr>
        <tr>
            <td>`getName`</td>
            <td>Возвращает имя контрола при его наличии. В обратном случае должен вернуть пустую строку.</td>
        </tr>
        <tr>
            <td>`getVal`</td>
            <td>Возвращает значение контрола.</td>
        </tr>
    </table>
</div>
