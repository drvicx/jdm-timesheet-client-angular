# jdm-timesheet-client-angular
Timesheet 2.0 TypeScript Angular REST-Client for Timesheet 2.0 Cloud REST-Services from "drvicx/jdm-timesheet-cloud" repo.
<br><br>

**=CHANGE LOG**<br>
*new at the beginning <br>

03: 20210623_1420:
<pre>
- все клиенты и компоненты сгенерированы повторно, т.к. на бакенде изменилась Модель;
- расширены REST-поля и операции для работы с сервисами User и Timedata;
- реализована работа с сервисом Orgdata (вывод единичной записи);
- изменена компоновка элементов UI приложения;
- добавлен скриншот текущего состояния приложения (_preview/app-preview_20210623_1420.png) -- см.внизу;
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

- ![предпосмотр](_preview/app-preview_20210623_1420.png?raw=true)
