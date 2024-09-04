## Todo List test assignment

## Deploy

[https://todo-list-bay-theta.vercel.app/](https://todo-list-six-phi-73.vercel.app/)

# Тестовое задание Todo List

## Содержание

- [Техническое задание](#Техническое-задание)
- [Используемые технологии](#Используемые-технологии)
- [Тестирование](#Тестирование)

## Техническое задание

Необходимо реализовать React-приложение ToDo list.

### Необходимый функционал:

- Добавление новой задачи;
- Редактирование конкретной задачи;
- Удаление конкретной задачи;
- Удаление отмеченных задач;
- Получение данных о пользователе с GitHub;
- Возможность смены темы приложения.

### Пример графического представления:

Ссылка на макет: [ToDo list](https://www.figma.com/design/vDAg1ykKrPYKJEW4fMO5aU/Modsen-Todo-List?node-id=0-3&t=yUcMTRERJh9AQvEp-0)

### Также проект предполагает:

- Организацию файловой структуры описанной в [structure](https://github.com/mkrivel/structure).
- Реализацию обработки ошибок через паттерн _"Error Boundaries"_;
- Реализацию адаптивной верстки до 390px;
- Обязательная анимация наведения, нажатия на кнопки, прокрутки карусели и слайдеров, появления элементов на странице при рендере и скролле;
- Использование context или redux для хранения темы приложения;
- Оптимизацию приложения по необходимости;
- Деплой приложения на платформу GitHub Pages или иные другие (Netlify, ...);
- Настройку конфигурации **_babel_**, **_eslint_**, **_prettier_**;
- Использование алиасов для импортирования файлов;
- Самомстоятельную настройку webpack для dev и production сборки;
- Оптимизацию дизайна под мобильные устройства;
- Использование языка typescript;
- Использование кастомных хуков: https://my-js.org/docs/cheatsheet/custom-hooks/;
- Придерживаться требований по написанию и организации кода react приложения. Ссылка на требования: [Требования к тестовому заданию](https://github.com/annaprystavka/requirements).

#### Описание экранов

1. [Главная страница](https://www.figma.com/design/vDAg1ykKrPYKJEW4fMO5aU/Modsen-Todo-List?node-id=0-72&t=yUcMTRERJh9AQvEp-0).
   Главная страница как и страница [Settings](https://www.figma.com/design/vDAg1ykKrPYKJEW4fMO5aU/Modsen-Todo-List?node-id=0-3&t=yUcMTRERJh9AQvEp-0)
   включают в себя верхний блок, который предполагает реализацию перехода между страницами.
   Добавить новую задачу можно нажатием на кнопку "Add todo" и "Enter". Если добавлена хоть одна задача, то на UI отображается кнопка "Deleted selected".
   При нажатии на checkbox задача считается выполненной и все выбранные задачи таким образом можно удалить нажав кнопку "Deleted selected".
   При редактировании задачи ее описание появляется в поле ввода и название кнопки "Add todo" меняется на "Edit". После нажатия на "Edit" новое значение сохраняется и содержимое кнопки меняется на "Add todo".

2. [Страница настроек](https://www.figma.com/design/vDAg1ykKrPYKJEW4fMO5aU/Modsen-Todo-List?node-id=0-3&t=yUcMTRERJh9AQvEp-0).
   На странице есть возможность смены темы приложения(светлая/темная). После перезагрузки приложения тема должна оставаться актуальная. При вводе имени и нажатии на поиск появляется карточка с логином и аватаром пользователя.
   Если пользователь не найден, то на странице отображается "Not found".

## Используемые технологии:

- **_node.js_** - программная платформа, основанная на движке V8 (транслирующем JavaScript в машинный код);
- **_typescript_** - инструмент строгой типизации;
- **_prettier_** - инструмент для форматирования кода;
- **_eslint_** - линтер для JavaScript кода;
- **_husky_** - современное решение для управления Git хуками;
- **_babel_** - транспайлер, преобразующий код из одного стандарта в другой;
- **_react_** - JavaScript-библиотека для создания пользовательских интерфейсов;
- **_react-router-dom_** - набор навигационных компонентов;
- **_redux_** - инструмент управления состоянием приложения;
- **_styled-components_** - система стилизации react компонентов;
- **_axios_** - инструмент для http-запросов на сервер;
- **_webpack_** - сборщик модулей, который позволяет скомпилировать JavaScript-модули в единый JS-файл;
- **_yarn_** - менеджер пакетов;
- **_jest_** — unit-тестирование.

## Тестирование

Реализовать тестирование c 30% покрытием функционала приложения:

- Модуль добавления/удаления/форматирования задач;
- Модуль смены темы приложения;
- Модуль навигации;
- Модуль поиска;
- Утилиты.
