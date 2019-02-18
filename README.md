# Домашняя работа №2.

Необходимо реализовать http-сервер, который при обращении с помощью GET запроса инициирует асинхронные операции:

- Непрерывный вывод в консоль сервера текущей даты и времени в формате UTC через определенные временные промежутки.
- Остановка консольного вывода отправки времени через некоторое время и завершение ответа сервера с возвращением клиенту текущей даты и времени отключения в формате UTC.

Критерии оценивания:

- При подключении к серверу начинается вывод в консоль текущего времени через равные интервалы
- Остановка вывода в консоль через указанное время и возврат текущей даты и времени пользователю.
- Интервал и временной промежуток должны задаваться при запуске сервера с помощью переменных окружения
- Стабильная работа сервера при нескольких одновременных запросах

## Как использовать

Инструкции как запустить проект:

1. git clone https://github.com/mrOrlando/loftschool-nodejs-homework-2
2. cd loftschool-nodejs-homework-2
3. npm install
4. npm start