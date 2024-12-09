---
sidebar_position: 4
---

# Инструкция по устранению проблем с запуском программы 🛠️

Если у вас возникают проблемы с запуском программы после ее установки, например, если ничего не происходит или появляется окно с ошибкой **localhost** или другие непонятные ошибки, то вам необходимо выполнить следующие действия:

## Проверка оперативной памяти 💾

Пожалуйста, перед запуском программы убедитесь, что в вашем устройстве имеется не менее **3ГБ** свободной оперативной памяти. Обратите внимание, что это должна быть именно свободная память, а не общий объем доступной памяти. В случае наличия **2ГБ** или более свободной оперативной памяти, вы можете установить версию программы **2020.23**, которая менее требовательна к оперативной памяти. Однако, если у вас доступно менее **2ГБ** оперативной памяти, мы рекомендуем вам обновить ваше устройство.

## Удаление процесса java.exe 🔍

Проверьте запущенные процессы на наличие процесса **java.exe**. Удалите данный процесс из активных.

## Проверка обновлений Windows 🔄

Проверьте наличие обновлений Windows. Если установлено обновление с версией **KB5011048**, то удалите его.

## Установка необходимых файлов 📦

### Для х64-битной системы

1. **Net Framework 4.8-x86-x64.exe**
2. **SSCERuntime_x64-RUS.msi**
3. **VC_redist.x64.exe**

### Для х32-битной системы

1. **Net Framework 4.8-x86-x64.exe**
2. **SSCERuntime_x86-RUS.msi**
3. **VC_redist.x86.exe**

После того, как вы скачаете нужные файлы, запустите каждый файл по очереди и следуйте инструкциям установщика. Если у вас возникнут какие-либо проблемы в процессе установки, обратитесь за помощью к технической поддержке программы.
