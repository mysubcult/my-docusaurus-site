---
sidebar_position: 3
---

# Настройка подключения к Bluetooth адаптеру ELM327 на Android 📱

## Подготовка к подключению 🔧

Для начала, убедитесь, что у вас есть адаптер OBDII ELM327 с типом подключения Bluetooth.

1. Вставьте адаптер в диагностический разъем (также известный как разъем OBD2).
2. Включите зажигание или запустите двигатель.
3. Если у вашего адаптера на корпусе есть кнопка включения — нажмите ее.

## Шаг №1: Настройка Bluetooth в системных настройках 📲

Если вы уже настроили связь с адаптером в системных настройках Bluetooth вашего телефона или планшета, либо в системных настройках вашего устройства нет раздела Bluetooth, в котором можно добавить устройство (такое часто встречается на мультимедийных системах) — переходите к шагу №2.

### Внимание ⚠️

В зависимости от версии Android, шаги, необходимые для связи телефона с адаптером, могут различаться!

1. Откройте системные настройки вашего телефона (настройки Android, не Car Scanner) и перейдите в раздел **Bluetooth**.
2. Включите Bluetooth.
3. Добавьте новое Bluetooth устройство. В некоторых версиях Android поиск Bluetooth устройств начинается сразу после перехода в раздел Bluetooth и включения Bluetooth, а в других нужно выбрать пункт **«Добавить новое устройство»** (название также может отличаться).
4. Подождите немного, пока идет обнаружение Bluetooth устройств, находящихся поблизости, и найдите в списке обнаруженных устройств ваш адаптер.

Обычно адаптер называется **“OBDII”**, **“obd2”** или что-то в этом роде. Если у вас фирменный адаптер, то его название может быть схожим с названием бренда производителя (например, **«Viecar»**, **«VLink»** и т.д.).

### Внимание ⚠️

Адаптер никогда не называется брендом или моделью вашего автомобиля и никогда не называется **«MY CAR»**. Не путайте адаптер с мультимедийной системой вашего автомобиля!

5. Нажмите на адаптер. Для многих адаптеров требуется ввод ПИН-кода (пароля).

Обычно ПИН-код **«0000»**, **«1234»**, **«7890»** или **«1111»**, но если эти пароли не подходят, то обратитесь к документации от вашего адаптера или к продавцу.

## Шаг №2: Выбор адаптера в Car Scanner 🛠️

1. Откройте Car Scanner и перейдите в настройки (кнопка в виде шестеренки в правом верхнем углу).
2. Выберите **«Адаптер»** (в старых версиях — **«Подключение»**).
3. Выберите тип подключения: **Bluetooth** (не выбирайте **Bluetooth LE (4.0)** — это совершенно другая технология связи!).
4. Нажмите на кнопку **«Выбрать устройство»**. Вы перейдете в окно поиска находящихся рядом устройств Bluetooth.
5. Подождите, пока ваш адаптер будет обнаружен.
6. Нажмите на него.

Вот и все, настройка подключения завершена. Теперь вам нужно просто нажать на большую зеленую кнопку **«Подключить»** на главном экране программы.