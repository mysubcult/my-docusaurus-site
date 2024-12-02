---
sidebar_position: 1
---

# Инструкция по установке 📝

## Введение 🛠️

Мы разработали данную инструкцию, чтобы обеспечить максимальный комфорт и успешность в установке приложения. Чтобы избежать возможных проблем, пожалуйста, внимательно следуйте всем пунктам инструкции.

:::caution Внимание
Все упоминаемые здесь папки и файлы находятся в папке "01 - Вася".
:::

Прибор изначально прошит под использование VCDS + Вася, т.е. можно параллельно с VCDS установить и Вася, но тогда проблемы от VCDS могут сохраниться и у Вася. Если же шнур изначально прошит под Вася, то он будет работать только с Вася - это наиболее стабильная сборка.

:::tip Рекомендация
**Рекомендуем прошить прибор под «ВАСЯ» и использовать программу «ВАСЯ».**
:::

## Подготовка к установке 🔧

Если у вас установлен антивирус или активен брандмауэр, перед установкой их необходимо перевести в неактивный режим (не выключать совсем, а отключить защиту). После установки программы нужно добавить всю папку с программой в доверенные программы в антивирусе. Затем работу антивируса можно восстановить. Отключите **ВСЕ** антивирусы, в том числе и стандартный **Защитник Windows**.

### Отключение стандартного защитника Windows 🔧

**Что нужно:** зайдите в Параметры, далее в Безопасность Windows и отключите ползунки так, как показано на скриншоте. Если у вас есть сторонние антивирусы, то их тоже нужно отключить.

![Отключение защиты](./img/vasya/image1.png)

### Отключение брандмауэра 🔒

На время установки следует отключить брандмауэр Защитника Windows.

**Что нужно:** открыть Панель управления, далее открыть Брандмауэр Защитника Windows и сделать все, как ниже на скриншоте и нажать Ok.

![Отключение брандмауэра](./img/vasya/image2.png)

## Установка программы 💻

1. Установите универсальный драйвер «01.01 - Drivers Universal» и «01.02 - Drivers Вася» из папки "01 - Вася".
2. Установите «01 - Install.exe» из папки «01.01 - Вася - 19.6».
:::caution Внимание
3. Добавьте папку с установленной программой в исключения вашего антивируса (если он есть) и в исключения Защитника Windows!
:::

![Добавление исключений](./img/vasya/image3.png)

4. Запустите программу с помощью ярлыка на рабочем столе. Ни в коем случае не обновляйте программу в автоматическом режиме - в системе заблокируется лицензионный номер шнура!
5. Подключите шнур к ноутбуку.
6. Подключите шнур к автомобилю.
7. Включите зажигание.
8. Зайдите в настройки программы и выполните **TECT** соединения. После удачного соединения нажмите кнопку **«Сохранить»**.

## Если что-то пошло не так 🛠️

1. Если интерфейс не распознается (неизвестное устройство), значит драйвер не установился. Нужно отключить проверку цифровой подписи драйверов Windows, а затем установить драйверы вручную повторно: файлы «01.01 - Drivers Universal» и «01.02 - Drivers Вася».
2. Если при тесте в интерфейсе вышла ошибка по неготовности CAN, то нужно нажать «Сохранить» даже в таком статусе, затем закрыть программу и отключить шнур полностью. Далее подключите шнур, запустите программу и проведите тест еще раз и нажмите «Сохранить» - потом все будет работать сразу.

:::note Примечание
Если у вас старое авто и/или отсутствует или не работает CAN, то это нормально, если статус готовности CAN будет отрицательным.
:::
