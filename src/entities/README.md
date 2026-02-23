# Entities

Назначение: здесь лежат сущности доменной области — `store`, `types`, модели и API для конкретной сущности.

Рекомендуемая миграция (пример):
- `src/stores/lookProfileStore.ts` -> `src/entities/lookProfile/model/lookProfileStore.ts`
- `src/types/lookProfile.ts` -> `src/entities/lookProfile/types.ts`

Дальнейшие шаги:
- Создайте папку `src/entities/<entity>/model` и `src/entities/<entity>/ui` при необходимости.
- Добавьте `index.ts`-баррель в каждой сущности для реэкспорта.

Пример команды (git):
```bash
git mv src/stores/lookProfileStore.ts src/entities/lookProfile/model/lookProfileStore.ts
git mv src/types/lookProfile.ts src/entities/lookProfile/types.ts
```

После перемещения — обновите импорты или добавьте баррели.
