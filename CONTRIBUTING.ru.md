# Внесение изменений

1. [Создать issue](https://github.com/bem/bem-components/issues/new) с описанием сути изменений.
1. Создать отдельную ветку с указанием номера issue (`issues/<номер issue>`) на основе ветки `v7`.
   Например, для issue с номером 42: `git checkout -b issues/42 v7`.
1. Внести изменения. Локально проверить результаты:
   ```bash
   npm run lint          # проверка кода (ESLint)
   npm run test:browser  # тесты в браузере (Playwright)
   npm run build         # сборка всех платформ (Vite)
   ```
1. Сделать коммит согласно с [CLA](CLA.md) и отправить изменения в удаленный репозиторий. При необходимости, сделать `rebase` от ветки `v7`.
1. Создать pull request на основе созданной ветки.
1. Связать pull request и issue (например, c помощью [комментария](https://github.com/blog/1506-closing-issues-via-pull-requests)).
1. Ждать принятия pull request и закрытия issue.

## Контрибьюторы

Список контрибьютеров данного проекта доступен по ссылке https://github.com/bem/bem-components/graphs/contributors. Вы так же можете получить его с помощью команды `git log --pretty=format:"%an <%ae>" | sort -u`.
