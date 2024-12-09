---
sidebar_position: 5
---

# Настройка подключения к Bluetooth LE (4.0) адаптеру ELM327 🔧

Для начала убедитесь, что у вас есть адаптер OBD2 ELM327, который работает через Bluetooth 4.0 (LE). Обратите внимание на версию Bluetooth! Устройства Apple iOS поддерживают только адаптеры Bluetooth 4.0. Более старые Bluetooth адаптеры не поддерживаются. Это ограничение операционной системы Apple iOS. Подробнее читайте в статье про выбор адаптера.

:::note Примечание
Вам необходимо вставить адаптер в диагностический разъем (также известный как разъем OBD2) и включить зажигание или запустить двигатель. Если у вашего адаптера на корпусе есть кнопка включения — нажмите ее.
:::

Убедитесь, что на вашем iPhone/iPad включен Bluetooth.

:::caution Внимание!
В отличие от Android устройств, вам не надо настраивать сопряжение с адаптером в системных настройках iPhone/iPad!
:::

![Settings](./img/ios-bt4/ru_ios_bluetooth_settings.png)

## Шаги настройки

### Шаг 1: Запустите Car Scanner

Перейдите в Настройки (нажмите на иконку шестеренки в правом верхнем углу).

![Settings 2](./img/ios-bt4/ru_ios_carscanner_main_settings_highlighted.png)

### Шаг 2: Выберите раздел «Адаптер»

В старых версиях этот раздел может называться «Подключение».

![Адаптер](./img/ios-bt4/ru_ios_carscanner_settings.png)

### Шаг 3: Выберите «Тип подключения»

Установите тип подключения: Bluetooth 4.0 (LE).

### Шаг 4: Нажмите на кнопку «Выбрать устройство»

Вы перейдете в окно поиска находящихся рядом устройств Bluetooth 4.0 (LE).

![Выбрать устройство](./img/ios-bt4/ru_ios_carscanner_settings_connection_bluetooth_not_selected.png)

### Шаг 5: Подождите обнаружения адаптера

Нажмите на него, когда он будет обнаружен. Если адаптер не найден в течение 5-10 секунд, нажмите на кнопку «Обновить», чтобы повторить поиск.

![Обновить](./img/ios-bt4/ru_ios_carscanner_settings_connection_bluetooth_selector.png)

:::tip Совет
Обычно адаптер называется OBDII, obd2 или что-то подобное. Если это фирменный адаптер, то его название может быть схожим с его брендом (например Viecar, VLink и т.д.). Пожалуйста, обратите внимание: адаптеры никогда не называются маркой автомобиля, «MY CAR» или чем-то подобным. И еще, у адаптера всегда есть имя. Устройства без имени, только с адресом вида не являются адаптерами.
:::

:::caution Внимание!
Если после нескольких попыток ваш адаптер не обнаружен, это означает, что у него устаревшая версия Bluetooth, которая не совместима с Apple iOS.
:::

### Шаг 6: Выберите ваш адаптер

Выберите ваш адаптер в списке обнаруженных устройств и дождитесь проверки на совместимость с Car Scanner.

![Выбор адаптера](./img/ios-bt4/ru_ios_carscanner_settings_bluetooth_pairing.png) ![Выбор адаптера 2](./img/ios-bt4/ru_ios_carscanner_settings_connection_bluetooth_selected.png)

## Завершение настройки

Вот и все, настройка подключения завершена. Теперь Вам нужно просто нажать на большую зеленую кнопку **«Подключить»** на главном экране программы. ✅

![Завершение](./img/ios-bt4/ru_ios_connection_progress.jpg)
