# jdm-timesheet-client-angular
Timesheet 2.0 TypeScript Angular REST-Client for Timesheet 2.0 Cloud REST-Services from "drvicx/jdm-timesheet-cloud" repo.
<br><br>

**=CHANGE LOG**<br>
*new at the beginning <br>

05: 20211202_1847:
<pre>
- после того как на REST-бакенде были сокращены URL в эндпоинтах, Angualar-клиент перестал отображать данные;
- внесены исправления в конфигурации Angular-сервисов:
  orgdata-rest-controller.service.ts,
  user-rest-controller.service.ts,
  timedata-rest-controller.service.ts;
</pre>

04: 20210624_1340:
<pre>
- реализован вывод списком всех записей из REST-сервисов User и Timedata;
- на бакенде обновлена таблица Timedata (теперь для каждого User есть 3 записи в Timedata);
- добавлен скриншот текущего состояния приложения "app-preview_20210624_1340.png" (см.внизу);
- далее: реализация вывода данных Timedata по клику на экземпляр User/Сотрудника;
</pre>

03: 20210623_1420:
<pre>
- все клиенты и компоненты сгенерированы повторно, т.к. на бакенде изменилась Модель;
- расширены REST-поля и операции для работы с сервисами User и Timedata;
- реализована работа с сервисом Orgdata (вывод единичной записи);
- изменена компоновка элементов UI приложения;
- добавлен скриншот текущего состояния приложения "app-preview_20210623_1420.png" (см.внизу);
- далее: реализация вывода списком всех записей из REST-сервисов User и Timedata;
</pre>

02: 20210614_2150:
<pre>
- добавлены модули для работы с REST-сервисами User и Timedata;
- реализованы компоненты для чтения единичной записи из каждого сервиса;
- реализованы базовые CSS-стили для табличного вывода данных;
</pre>

01: 20210613_0630:
<pre>
- создан каркас Angular-приложения в стиле "HelloWorld";
</pre>
<br>

**=INFO**

- linked project:<br>
  [GitHub: drvicx / jdm-timesheet-cloud](https://github.com/drvicx/jdm-timesheet-cloud) <br>

- Available endpoints (local): <br>
  1 - [Домашняя страница Angular-приложения](http://localhost:4200) <br>

- environment:<br>
  Windows 10 + WSL2 <br>
  Docker Desktop v3.3.3 (Docker v20.10.6, Compose 1.29.1) <br>
  IntelliJ IDEA 2020.3 <br>

- dependencies / cli-tools:<br>
  NodeJS (node) v14.17.0 <br>
  Node Package Manager (npm) v6.14.13 <br>
  TypeScript v4.3.1 <br>
  TypeScript Compiler (tsc) v4.3.2 <br>
  Angular CLI v12.0.3 <br>

**=APP CURRENT VIEW**

![предпосмотр](_preview/app-preview_20211202_2230.png?raw=true)
