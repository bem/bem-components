# image

Используется для вставки самостоятельных изображений.

## Обзор блока

### Специализированные поля блока

| Поле | Тип | Описание |
| ---- | --- | -------- |
| <a href="#title">title</a> | <code>String</code> | Текст всплывающей подсказки. |
| <a href="#alt">alt</a> | <code>String</code> | Альтернативный текст для изображения. |
| <a href="#url">url</a> | <code>String</code> | Адрес изображения. |
| <a href="#width">width</a> | <code>Number</code> | Ширина изображения в пикселях. |
| <a href="#height">height</a> | <code>Number</code> | Высота изображения в пикселях. |
| <a href="#content">content</a> | <code>BEMJSON</code> | Контент изображения в формате SVG. |

## Описание блока

Блок `image` предназначен для вставки самостоятельных изображений. Адаптирован для вывода в специальных режимах (чтения, печати, для людей с ограниченными возможностями).

### Специализированные поля блока

<a name="title"></a>
#### Поле `title`

Тип: `String`.

Определяет текст всплывающей подсказки.

```js
{
    block : 'image',
    url : 'https://bem.info/m/_/UDW_1du_HiznlY0CUbPFjWQH3iY.svg',
    title : 'Все подробности на bem.info'
}
```

<a name="alt"></a>
#### Поле `alt`

Тип: `String`.

Определяет альтернативный текст для изображений. Такой текст позволяет получить информацию об изображении, если браузер по каким-то причинам не может его отобразить.

```js
{
    block : 'image',
    url : 'https://bem.info/m/_/wuyLRHj8p7lF3eT96kTKumCdXzM.svg',
    width : 100,
    height : 100,
    alt : 'BEM'
}
```

<a name="url"></a>
#### Поле `url`

Тип: `String`.

Определяет адрес, с которого загружается изображение.

```js
{
    block : 'image',
    url : 'https://bem.info/m/_/lHGkpIFauDlxw9MGg869APxKdkc.svg',
    width : 100,
    height : 100
}
```

<a name="width"></a>
#### Поле `width`

Тип: `Number`.

Определяет ширину изображения в пикселях.

```js
{
    block : 'image',
    url : 'https://img-fotki.yandex.ru/get/17848/259818507.0/0_12ab32_a798a820_X5L',
    width : 200,
    height : 100
}
```

<a name="height"></a>
#### Поле `height`

Тип: `Number`.

Определяет высоту изображения в пикселях.

```js
{
    block : 'image',
    url : 'https://img-fotki.yandex.ru/get/17848/259818507.0/0_12ab32_a798a820_X5L',
    width : 100,
    height : 200
}
```

<a name="content"></a>
#### Поле `content`

Тип: `BEMJSON`.

Определяет контент изображения в формате SVG.

```js
{
    block : 'image',
    content : '<svg xmlns="http://www.w3.org/2000/svg" width="15" height="16"><path d="M13.5.5l-8 12L1.7 8l-1 1.6L5.6 15l9.1-13.4z"/></svg>'
}
```
