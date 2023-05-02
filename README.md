## Инструкция по установке для Windows 10/11 ,консоль Git Bash

1. Создать пустую папку на своём компьютере
2. Скачать копию удалённого репозитория при помощи команды `git clone https://github.com/Midnight-Knight/rtu_it_lab_project.git`

## Инструкция по подготовке к запуску Frontend части

1. Установить/обновить стабильную версию node.js (Версия разработчика: v18.16.0, узнать вашу версию можно при помощи команды `node -v`, скачать node.js можно на официальном сайте `https://nodejs.org/ru`)
2. Установить/обновить npm (Версия разработчика: v9.6.2, узнать вашу версию можно при помощи команды `npm -v`, npm устанавливается вместе с node.js(смотреть 1 пункт), обновить версию npm можно при помощи команды `npm update npm -g`)
3. После установки,в консоли перейдите в директорию папки с клоном репозитория `cd ./путь`
4. Пропишите следующую команду для установки всех нужных модулей: `npm i --force`

## Инструкция по запуску Frontend части 
 
#### ВНИМАНИЕ
Для полноценной работы необходима связь с интернетом, Backend часть уже запущена 
до конца месяца на удалённом сервере, в случае если Frontend не может связаться с сервером
,скорее всего срок аренды закончился и вам надо будет мне написать, для продления аренды.

#### ИНСТРУКЦИЯ

1. В консоли перейдите в директорию папки с проектом `cd ./путь`
2. Введите следующую команду в консоли, для запуска web-приложения в локальной и домашней сети `npm start` (в случае если webpack вывел в консоль только адрес сайта на локальной машине, зайти на сайт в вашей домашней сети вы сможете только если узнаете IPv4 адрес, делается это при помощи команды `ipconfig`. Сайт будет размещён на порту `3000` или же на `http://X.X.X.X:3000`)

